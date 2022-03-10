import React from "react";
import { useGlobalContext } from "../context";
import { Banner, CircularProgress, LiveAnywhere } from "../GetComponents";

function index(props) {
  // const { isLoading } = useGlobalContext();
  // if (isLoading) {
  //   return (
  //     <div className="loading">
  //       <CircularProgress color="secondary" />
  //     </div>
  //   );
  // }
  return (
    <div className="home">
      <LiveAnywhere path={props.location.state} />
    </div>
  );
}

export default index;
