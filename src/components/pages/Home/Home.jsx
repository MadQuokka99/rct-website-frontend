import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import strings from "../../../config/strings";
import "./Home.css";
import Logo from "../../../utils/rct-logo.png";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";

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

  return (
    <>
      <Helmet>
        <title>{homepageStrings.title}</title>
      </Helmet>
      <div className="languageHeader">
        <button className="btn">RO</button>
        <Button>EN</Button>
      </div>

      <div className="header">
        <img src={Logo} className="logoImage" alt="Website logo" />
        <div className="menu-left-side">
          <Button
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          >
            {<SearchIcon className="search-icon" onClick={handleSearchClick} />}
          </Button>

          <Button
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            {<MenuIcon fontSize="large" className="hamburger-menu-icon" />}
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
      <div className="content"></div>
      <div className="footer"></div>
    </>
  );
};

export default Home;
