import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import strings from "../../../config/strings";
import "./Home.scss";
import Logo from "../../../utils/rct-logo.png";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import ROFlag from "../../../utils/flag-ro.png";
import UKFlag from "../../../utils/flag-uk.png";

const { homepage: homepageStrings } = strings;

const Home = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (e) => {
    setAnchorEl(null);
    console.log(e);
  };

  const handleSearchClick = () => {
    console.log("Add search functionality: modal smth smth");
  };

  const handleROFlagClick = () => {
    console.log("Change language to romanian");
  };

  const handleUKFlagClick = () => {
    console.log("Change language to english");
  };

  return (
    <>
      <Helmet>
        <title>{homepageStrings.title}</title>
      </Helmet>
      <div className="languageHeader">
        <button className="btn" onClick={handleROFlagClick}>
          <img src={ROFlag} className="language-flag" alt="Romanian flag" />
          RO
        </button>
        <button className="btn" onClick={handleUKFlagClick}>
          <img src={UKFlag} className="language-flag" alt="UK flag" />
          EN
        </button>
      </div>

      <div className="header">
        <img src={Logo} className="logoImage" alt="Website logo" />
        <div className="menu-left-side">
          <div className="menu-buttons-section">
            <Button variant="contained" className="menu-button">
              {homepageStrings.menuButtons.home}
            </Button>
            <Button variant="contained" className="menu-button">
              {homepageStrings.menuButtons.news}
            </Button>
            <Button variant="contained" className="menu-button">
              {homepageStrings.menuButtons.schedule}
            </Button>
            <Button variant="contained" className="menu-button">
              {homepageStrings.menuButtons.news}
            </Button>
            <Button variant="contained" className="menu-button">
              {homepageStrings.menuButtons.aboutUs}
            </Button>
          </div>

          <Button>
            {<SearchIcon className="search-icon" onClick={handleSearchClick} />}
          </Button>

          <Button
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
            className="hamburger-menu-icon"
          >
            {<MenuIcon fontSize="large" />}
          </Button>

          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem
              onClick={(e) => {
                handleClose(e);
                console.log("Here we will navigate");
              }}
            >
              {homepageStrings.menuButtons.home}
            </MenuItem>
            <MenuItem
              onClick={(e) => {
                handleClose(e);
                console.log("Here we will navigate");
              }}
            >
              {homepageStrings.menuButtons.news}
            </MenuItem>
            <MenuItem
              onClick={(e) => {
                handleClose(e);
                console.log("Here we will navigate");
              }}
            >
              {homepageStrings.menuButtons.schedule}
            </MenuItem>
            <MenuItem
              onClick={(e) => {
                handleClose(e);
                console.log("Here we will navigate");
              }}
            >
              {homepageStrings.menuButtons.contact}
            </MenuItem>
            <MenuItem
              onClick={(e) => {
                handleClose(e);
                console.log("Here we will navigate");
              }}
            >
              {homepageStrings.menuButtons.aboutUs}
            </MenuItem>
          </Menu>
        </div>
      </div>
      <div className="content">
        <h1>Content</h1>
      </div>
      <div className="footer">
        <h1>{homepageStrings.footerDetails.slogan}</h1>
        <hr />
        <h3>{homepageStrings.footerDetails.phoneNumber}</h3>
        <h3>{homepageStrings.footerDetails.email}</h3>
        <h3>{homepageStrings.footerDetails.siteCreator}</h3>
      </div>
    </>
  );
};

export default Home;
