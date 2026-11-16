import React, { useState, useEffect } from "react";
import axios from "axios";

function Summary() {
  const [allHoldings, setAllHoldings] = useState([]);

  useEffect(() => {
    axios
      .get("https://stock-trading-backend-2sux.onrender.com/allHoldings")
      .then((res) => {
        setAllHoldings(res.data);
      });
  }, []);

  const totalInvestment = allHoldings.reduce(
    (total, stock) => total + stock.avg * stock.qty,
    0,
  );

  const currentValue = allHoldings.reduce(
    (total, stock) => total + stock.price * stock.qty,
    0,
  );

  const profitLoss = currentValue - totalInvestment;

  const profitLossPercentage =
    totalInvestment === 0 ? 0 : (profitLoss / totalInvestment) * 100;

  const profitClass = profitLoss >= 0 ? "profit" : "loss";

  return (
    <>
      <div className="username">
        <h6>Hi, User!</h6>
        <hr className="divider" />
      </div>

      <div className="section">
        <span>
          <p>Equity</p>
        </span>

        <div className="data">
          <div className="first">
            <h3>3.74k</h3>
            <p>Margin available</p>
          </div>
          <hr />

          <div className="second">
            <p>
              Margins used <span>0</span>
            </p>
            <p>
              Opening balance <span>3.74k</span>
            </p>
          </div>
        </div>
        <hr className="divider" />
      </div>

      <div className="section">
        <span>
          <p>Holdings ({allHoldings.length})</p>
        </span>

        <div className="data">
          <div className="first">
            <h3 className={profitClass}>
              {profitLoss.toFixed(2)}
              <small>
                {" "}
                {profitLoss >= 0 ? "+" : ""}
                {profitLossPercentage.toFixed(2)}%
              </small>
            </h3>
            <p>P&L</p>
          </div>
          <hr />

          <div className="second">
            <p>
              Current Value <span>{currentValue.toFixed(2)}</span>
            </p>
            <p>
              Investment <span>{totalInvestment.toFixed(2)}</span>
            </p>
          </div>
        </div>
        <hr className="divider" />
      </div>
    </>
  );
}

export default Summary;
