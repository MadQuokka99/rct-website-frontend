import React from "react";
import { Helmet } from "react-helmet-async";
import strings from "../../../config/strings";
import "./Home.scss";
import LanguageBar from "../../LanguageBar";
import Header from "../../Header";
import HomePageContent from "./HomePageContent";
import Footer from "../../Footer";

const { homepage: homepageStrings } = strings;

const Home = () => {
  return (
    <>
      <Helmet>
        <title>{homepageStrings.title}</title>
      </Helmet>
      <LanguageBar />
      <HomePageContent />
      <Footer />
    </>
  );
};

export default Home;
