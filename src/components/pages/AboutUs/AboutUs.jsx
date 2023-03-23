import { Helmet } from "react-helmet-async";
import React from "react";
import "../Home/Home.scss";

const AboutUs = () => {
  return (
    <>
      <Helmet>
        <title>About Us</title>
      </Helmet>
      <div className="content" style={{ textAlign: "center", padding: "1em" }}>
        This is us :)
      </div>
    </>
  );
};

export default AboutUs;
