import React, { useState } from "react";
import "./Search.css";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { People } from "../GetIcons";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { Calendar } from "../GetComponents";

//js Data Picker Component
function Search({ handleBookBtn }) {
  const history = useHistory();
  const [endDate, setEndDate] = useState(new Date());
  const [startDate, setStartDate] = useState(new Date());
  const [persons, setPersons] = useState(0);

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

  const onChange = (e) => {
    setPersons(e.target.value);
  };

  return (
    <div>
      <div className="searchInputArea">
        {/* <Calendar date={date} onChange={(newDate) => setDate(newDate)} /> */}
        <Calendar />
      </div>
      {/* <DateRangePicker ranges={[selectionRange]} onChange={handleSelect} /> */}
      <h3 className="MT1 MB2 searchHeading">
        <People />
        <span className="ML05">Number of Persons</span>
      </h3>
      <div className="searchInputArea">
        <input
          type="text"
          disabled
          name="USD"
          min={0}
          value="$"
          // onChange={onChange}
        />
        <input
          type="number"
          name="persons"
          min={0}
          value={persons}
          onChange={onChange}
        />
        <Button
          className="btn btnPrimary"
          onClick={(e) => handleBookBtn(persons)}
        >
          get
        </Button>
      </div>
    </div>
  );
}

export default Search;
