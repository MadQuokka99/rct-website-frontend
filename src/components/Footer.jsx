import React from "react";
import strings from "../config/strings";
import "./Footer.scss";

const { general: generalStrings } = strings;

const Footer = () => {
  return (
    <>
      <div className="footer">
        <h1>{generalStrings.footer.slogan}</h1>
        <hr />
        <h3>{generalStrings.footer.phoneNumber}</h3>
        <h3>{generalStrings.footer.email}</h3>
        <h3>{generalStrings.footer.siteCreator}</h3>
      </div>
    </>
  );
};

export default Footer;
