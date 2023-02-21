import React from "react";
import { Link } from "react-router-dom";

import "../Pages/Four0Four.css"

const Four0Four = () => {
  return (
    <div className="text-center-error">
      <h1>Sorry! This page does not exist.</h1>
      <h3>
        Return{" "}
        <Link className="return-home" to="/">
          Home
        </Link>
      </h3>
      {/* <img src={spaceman} alt="spaceman" width="800px" height="600px" /> */}
    </div>
  );
};

export default Four0Four;
