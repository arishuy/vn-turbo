import React from "react";
import "../styles/Body.css";
import Navigation from "./Navigation";
import Post from "./Post";
import Recommend from "./Recommend";

const Body = () => {
  return (
    <div className="body-container">
      <Navigation />
    <div className="body-container__middle">
      <Post />
        <Post />
    </div>
      <div className="body-container__right">
        <Recommend />
      </div>
    </div>
  );
};

export default Body;
