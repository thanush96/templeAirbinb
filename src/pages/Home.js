import React from "react";
import { useGlobalContext } from "../context";
import {
  Banner,
  CircularProgress,
  Aalayam,
  Blog,
  Merchandise,
  Astrology,
  Booking,
  Education,
  LiveAnywhere,
  NewsRoomVideos,
} from "../GetComponents";

function Home() {
  const { isLoading } = useGlobalContext();

  if (isLoading) {
    return (
      <div className="loading">
        <CircularProgress color="secondary" />
      </div>
    );
  }
  return (
    <div className="home">
      <Banner />
      <Aalayam />
      <Merchandise />
      <Blog />
      <Astrology />
      <Booking />
      <Education />
      <NewsRoomVideos />
    </div>
  );
}

export default Home;
