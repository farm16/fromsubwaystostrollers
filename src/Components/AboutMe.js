import React from "react";

function AboutMe() {
  return (
    <div style={{ flex: "50%" }}>
      <div className="mainColumn">
        <img
          className="mainColumn__picture"
          src="https://via.placeholder.com/400?text=Main+Picture"
        ></img>
        <h1 style={{ fontSize: "3.5em" }}>Amaira</h1>
        <h1>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old. Richard McClintock, a Latin professor at
        </h1>
      </div>
    </div>
  );
}

export default AboutMe;
