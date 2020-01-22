import React from "react";
import "../scss/main.scss";

export default function Home() {
  return (
    <div className="row">
      <div className="mainColumn">
        <a href=" https://placeholder.com">
          <img
            className="mainColumn__picture"
            src="https://via.placeholder.com/400?text=Main+Picture"
          ></img>
        </a>
      </div>
      <div className="regularColumn">
        <div>
          <a href=" https://placeholder.com">
            <img
              className="regularColumn__First"
              src="https://via.placeholder.com/150?text=Side+Picture"
            ></img>
          </a>
          <div className="regularColumn__description">
            <h1>Title of Post</h1>
            <h3>Description of the post </h3>
          </div>
        </div>
        <div>
          <a href=" https://placeholder.com">
            <img
              className="regularColumn__Second"
              src="https://via.placeholder.com/150?text=Side+Picture"
            ></img>
          </a>
          <div className="regularColumn__description">
            <h1>Title of Post</h1>
            <h3>Description of the post </h3>
          </div>
        </div>
        <div>
          <a href=" https://placeholder.com">
            <img
              className="regularColumn__Third"
              src="https://via.placeholder.com/150?text=Side+Picture"
            ></img>
          </a>
          <div className="regularColumn__description">
            <h1>Title of Post</h1>
            <h3>Description of the post </h3>
          </div>
        </div>
      </div>
    </div>
  );
}
