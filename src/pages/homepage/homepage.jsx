import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebase.utils";
function Homepage() {
  return (
    <React.Fragment>
      <Link to="/signin">Sign In</Link>
      <button onClick={() => auth.signOut()}>Sign Out</button>
    </React.Fragment>
  );
}

export default Homepage;
