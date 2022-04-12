import React, { useState } from "react";
import { useGlobalContext } from "../context";
import { Tooltip, Search } from "../GetComponents";
import { SearchIcon, DateRangeIcon } from "../GetIcons";
import { Link } from "react-router-dom";
import { CircularProgress } from "@material-ui/core";
import "../components/Header.css";

function Index() {
  const { isLoading } = useGlobalContext();
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(true);

  // if (isLoading) {
  return (
    <div className="loading">
      {/* <CircularProgress color="secondary" /> */}
      <div className="headerCenter">
        <div className="headerInputContainer">
          <div className="datePickerConatiner">
            <Search setIsDatePickerOpen={setIsDatePickerOpen} />
          </div>
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
      </div>
    </div>
  );
  // }
  // return <div className="home"></div>;
}

export default Index;
