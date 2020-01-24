import React from "react";
// import "../scss/main.scss";
import AboutMe from "../Components/AboutMe";
import RecentPosts from "../Components/RecentPosts";

export default function Home() {
  const homeStyle = {
    display: "flex",
    flexFlow: "wrap",
    justifyContent: "center",
    width: "90vw",
    margin: "auto"
  };
  return (
    <div style={homeStyle}>
      <AboutMe></AboutMe>
      <RecentPosts></RecentPosts>
    </div>
  );
}
