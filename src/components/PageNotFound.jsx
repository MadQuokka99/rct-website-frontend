import React from "react";
import { Helmet } from "react-helmet-async";
import "./PageNotFound.scss";
import Logo from "../utils/rct-logo.png";
import { useNavigate } from "react-router-dom";
const PageNotFound = () => {
  const navigate = useNavigate();
  return (
    <>
      <Helmet>
        <title>404 Page not found</title>
      </Helmet>
      <div className="header">
        <img src={Logo} className="logoImage" alt="Website logo" />
      </div>
      <div className="pageNotFoundContent">
        <h1>404 - Page not found.</h1>
        <h2>Unfortunately, this page doesn't exist.</h2>
        <h2
          onClick={() => {
            navigate("/home");
          }}
        >
          Go back home
        </h2>
      </div>
    </>
  );
};

export default PageNotFound;
