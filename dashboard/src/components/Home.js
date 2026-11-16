import React, { useEffect, useState } from "react";
import axios from "axios";

import Dashboard from "./Dashboard";
import TopBar from "./TopBar";

function Home() {
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const verifyUser = async () => {
      try {
        const { data } = await axios.post(
          "https://stock-trading-backend-2sux.onrender.com/",
          {},
          { withCredentials: true },
        );

        if (data.status) {
          setUsername(data.user);
        } else {
          window.location.href = "https://stock-trading-auth.netlify.app/login";
        }
      } catch (error) {
        console.log("Verification error:", error);
        window.location.href = "https://stock-trading-auth.netlify.app/login";
      } finally {
        setLoading(false);
      }
    };

    verifyUser();
  }, []);

  if (loading) {
    return <h2>Verifying user...</h2>;
  }

  if (!username) {
    return null;
  }

  return (
    <>
      <TopBar />
      <Dashboard />
    </>
  );
}

export default Home;
