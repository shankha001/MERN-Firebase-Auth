import React from "react";
import { Link } from "react-router-dom";
function Homepage() {
  return (
    <React.Fragment>
      <Link to="/signin">Sign In</Link>
    </React.Fragment>
  );
}

export default Homepage;
