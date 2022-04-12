import React, { useEffect, useState } from "react";
import { useGlobalContext } from "../context";
import { Tooltip, Search, Calendar } from "../GetComponents";
import { SearchIcon, DateRangeIcon } from "../GetIcons";
import { Link } from "react-router-dom";
import { CircularProgress } from "@material-ui/core";
import "../components/Header.css";

function Index() {
  const { isLoading } = useGlobalContext();
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(true);
  const [title, setTitle] = useState("");

  useEffect(() => {
    let search = window.location.search;
    let params = new URLSearchParams(search);
    let title = params.get("title");
    setTitle(title);
    //JS DEBUG
    console.log(title);
  }, []);

  return (
    <div>
      <Search setIsDatePickerOpen={setIsDatePickerOpen} />
    </div>
  );
}

export default Index;
