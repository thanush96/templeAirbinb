import React, { useEffect, useState } from "react";
import { useGlobalContext } from "../context";
import { Tooltip, Search, Calendar } from "../GetComponents";
import { Link } from "react-router-dom";
import { Button, CircularProgress, Grid } from "@material-ui/core";
import "../components/Header.css";
// import { Book } from "@material-ui/icons";

function Index() {
  const { isLoading } = useGlobalContext();
  const [selectedDate, setSelectedDate] = useState("");
  const [title, setTitle] = useState("");
  const [names, setNames] = useState([{}]);
  const [timeSlots, setTimeSlots] = useState([
    "8.00",
    "10.30",
    "12.00",
    "02.30",
    "05.30",
  ]);

  // REACT - TALENT ADD INTO ARRAY
  const handleNameChange = (idx) => (evt) => {
    const newName = names.map((Names, sidx) => {
      if (idx !== sidx) return Names;
      return {
        ...Names,
        name: evt.target.value,
      };
    });
    setNames(newName);
  };

  const handleLagnaChange = (idx) => (evt) => {
    const newLagna = names.map((Lagna, sidx) => {
      if (idx !== sidx) return Lagna;
      return {
        ...Lagna,
        lagna: evt.target.value,
      };
    });
    setNames(newLagna);
  };

  const handleRemoveChange = (idx) => () => {
    setNames(names.filter((s, sidx) => idx !== sidx));
  };

  const handleAddChange = () => {
    setNames(names.concat([{ name: "", lagna: "" }]));
    console.log(names);
  };

  const handleSelect = (date) => {
    console.log("date", date);
    setSelectedDate(date);
  };

  // // js create dynamic array with use input
  // const Book = (persons) => {
  //   let array = [];
  //   for (let i = 0; i < persons; i++) {
  //     array.push({});
  //     console.log(array);
  //   }
  //   setNames(array);
  // };

  useEffect(() => {
    let search = window.location.search;
    let params = new URLSearchParams(search);
    let title = params.get("title");
    setTitle(title);
    //JS DEBUG
    console.log(title);
  }, []);

  return (
    <Grid alignItems="center" justifyContent="space-between" spacing={2}>
      <h2
        className="h2"
        style={{
          marginLeft: 45,
          marginBottom: 25,
          marginTop: 10,
        }}
      >
        Booking
      </h2>
      <Grid
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          flexWrap: "wrap",
        }}
      >
        <Grid style={{ display: "grid", alignContent: "space-around" }}>
          {timeSlots.map((data) => {
            return <Button className="btn btnPrimary">{data}</Button>;
          })}
        </Grid>

        <Grid
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div className="InputAreaBig">
            <input value={selectedDate} disabled />
          </div>
          <Calendar date={selectedDate} onChange={handleSelect} />
        </Grid>

        <Grid
          style={{
            display: "flex",
            flexDirection: "column",
            padding: 10,
          }}
        >
          {names.map((Names, idx) => (
            <div className="InputArea">
              <input
                type="text"
                placeholder={`Name ${idx + 1}`}
                value={Names.name}
                onChange={handleNameChange(idx)}
              />
              <input
                type="text"
                placeholder={`Lagna ${idx + 1}`}
                value={Names.lagna}
                onChange={handleLagnaChange(idx)}
              />

              <Button className="btn btnPrimary" onClick={handleAddChange}>
                Add
              </Button>
              <Button className="btn " onClick={handleRemoveChange(idx)}>
                Remove
              </Button>
            </div>
          ))}
        </Grid>
      </Grid>

      <Grid style={{ display: "flex", justifyContent: "flex-end" }}>
        <Link to="/payment">
          <button class="button button-link">Proceed</button>
        </Link>
      </Grid>
    </Grid>
  );
}

export default Index;
