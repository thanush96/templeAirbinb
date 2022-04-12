import React from "react";
import { useGlobalContext } from "../context";
import {
  Banner,
  CircularProgress,
  LiveAnywhere,
  Archanai,
  Pooja,
} from "../GetComponents";

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
      {/* <LiveAnywhere path={props.location.state} /> */}
      <Archanai />
      <Pooja />
    </div>
  );
}

export default index;
