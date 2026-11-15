import React from "react";

function People() {
  return (
    <div className="container">
      <div className="row p-3 mt-5 border-top">
        <h1 className="text-center">Meet the Developer</h1>
      </div>
      <div
        className="row p-3 text-muted"
        style={{ lineHeight: "1.8", fontSize: "1.2em" }}
      >
        <div className="col p-3 text-center">
          <img
            src="media\saquibprofessionalphoto.jpeg"
            alt="Photo"
            style={{ borderRadius: "100%", width: "50%" }}
          />
          <h4 className="mt-5">Saquib Aboozar</h4>
          <h6>Full-Stack Developer | AI Enthusiast</h6>
        </div>
        <div className="col p-3">
          <p>
            I'm Saquib Aboozar, a passionate Full-Stack Developer interested in
            building scalable web applications and exploring AI-driven
            technologies. I enjoy turning ideas into real-world applications
            using React, JavaScript, Node.js, Express.js, and MongoDB. I focus
            on writing clean code, building secure authentication systems,
            developing REST APIs, and creating intuitive user experiences.
            Currently, I'm continuously learning, building projects, and looking
            for opportunities to contribute to impactful software products.
          </p>
          <p>
            Connect on{" "}
            <a
              href="https://www.linkedin.com/in/saquib-aboozar-64a234344?utm_source=share_via&utm_content=profile&utm_medium=member_android"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "None" }}
            >
              LinkedIn{" "}
            </a>{" "}
            {/* /{" "}
            <a href="" style={{ textDecoration: "None" }}>
              TradingQnA
            </a>{" "}
            /{" "}
            <a href="" style={{ textDecoration: "None" }}>
              Twitter
            </a> */}
          </p>
        </div>
      </div>
    </div>
  );
}

export default People;
