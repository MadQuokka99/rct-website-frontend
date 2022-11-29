import React from "react";
import { Helmet } from "react-helmet-async";
import strings from "../../../config/strings";

const { homepage: homepageStrings } = strings;

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>{homepageStrings.title}</title>
      </Helmet>
      <h1>HomePage</h1>
    </div>
  );
};

export default Home;
