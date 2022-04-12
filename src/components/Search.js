import React, { useState } from "react";
import "./Search.css";
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file

import { People } from "../GetIcons";
import { Button } from "@material-ui/core";

import { useHistory } from "react-router-dom";
import { Calendar } from "../GetComponents";

// Data Picker Component
function Search({ setIsDatePickerOpen }) {
  const history = useHistory();
  const [endDate, setEndDate] = useState(new Date());
  const [startDate, setStartDate] = useState(new Date());

  const selectionRange = {
    startDate,
    endDate,
    key: "selection",
  };
  const handleSelect = (ranges) => {
    console.log(ranges);
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };
  const handleSearchBtn = () => {
    // history.push("/search");
    // setIsDatePickerOpen(false);
  };

  return (
    <div>
      <div className="searchInputArea">
        <Calendar />
      </div>
      {/* <DateRangePicker ranges={[selectionRange]} onChange={handleSelect} /> */}
      <h3 className="MT1 MB2 searchHeading">
        <People />
        <span className="ML05">Number of Persons</span>
      </h3>
      <div className="searchInputArea">
        <input
          type="number"
          name="guests"
          id="guests"
          min={0}
          defaultValue={1}
        />
        <Button className="btn btnPrimary" onClick={handleSearchBtn}>
          Get from
        </Button>
      </div>
    </div>
  );
}

export default Search;
