import React, { useState } from "react";
import {
  SearchIcon,
  ExpandMoreIcon,
  LanguageIcon,
  DateRangeIcon,
} from "../GetIcons";
import { Avatar, IconButton, Tooltip, Search, Button } from "../GetComponents";
import "./Header.css";
import { Link } from "react-router-dom";
// this.props.testvalue === "hello";
let value = "hello";

function Header(props) {
  // const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);
  return (
    <div className="header">
      <div className="headerLeft">
        <Link to="/">
          Logo
          {/* <img
            className="headerLogo"
            src="images/airbnbLogo.png"
            alt="airbnb logo"
          /> */}
        </Link>
      </div>
      {/* <div className="headerCenter">
        <div className="headerInputContainer">
          {isDatePickerOpen && (
            <div className="datePickerConatiner">
              <Search setIsDatePickerOpen={setIsDatePickerOpen} />
            </div>
          )}
          <input type="text" placeholder="Start your search" />
          <SearchIcon className="colorPrimary" />
        </div>
        <div className="headerDatePickerContainer">
          <Tooltip
            title={
              <p className="tooltip">
                {isDatePickerOpen ? "Hide Dates" : "Search Dates"}
              </p>
            }
            aria-label="select-dates"
          >
            <DateRangeIcon
              className="iconCustom"
              onClick={() => setIsDatePickerOpen(!isDatePickerOpen)}
            />
          </Tooltip>
        </div>
      </div> */}

      <div className="headerCenter">
        <nav>
          <div
            style={{
              display: "flex",
              borderRadius: 50,
              border: "1px solid black",
              padding: 4,
            }}
          >
            <Link
              className="nav-title"
              to={{ pathname: "/services", state: "Aalayam" }}
            >
              Aalayam
            </Link>
            <Link
              className="nav-title"
              to={{ pathname: "/services", state: "Astrology" }}
            >
              Astrology
            </Link>
            <Link
              to={{ pathname: "/services", state: "Merchandise" }}
              className="nav-title"
            >
              Merchandise
            </Link>
            <Link
              to={{ pathname: "/services", state: "Education" }}
              className="nav-title"
            >
              Education
            </Link>
            <Link
              to={{ pathname: "/services", state: "Booking" }}
              className="nav-title"
            >
              Booking
            </Link>
            <Link
              to={{ pathname: "/services", state: "News" }}
              className="nav-title"
            >
              News
            </Link>
          </div>
        </nav>
      </div>

      <div className="headerRight">
        {/* <Link to="/becomehost">
          <Button className="btn btnPrimaryOutlined">Admin</Button>
        </Link> */}
        <button className="btn btnPrimary">Admin</button>
        <LanguageIcon />
        <ExpandMoreIcon />
        <IconButton>
          <Avatar />
        </IconButton>
      </div>
    </div>
  );
}

export default Header;
