import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import strings from "../../../config/strings";
import "./Home.css";
import Logo from "../../../utils/rct-logo.png";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";

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
  return (
    <>
      <Helmet>
        <title>{homepageStrings.title}</title>
      </Helmet>

      <div className="header">
        <img src={Logo} className="logoImage" alt="Website logo" />
        <Button
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        >
          {<MenuIcon fontSize="large" className="hamburger" />}
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
            Profile
          </MenuItem>
          <MenuItem
            onClick={(e) => {
              handleClose(e);
              console.log("Here we will navigate");
            }}
          >
            My account
          </MenuItem>
          <MenuItem
            onClick={(e) => {
              handleClose(e);
              console.log("Here we will navigate");
            }}
          >
            Logout
          </MenuItem>
        </Menu>
      </div>
      <div className="content"></div>
      <div className="footer"></div>
    </>
  );
};

export default Home;
