import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebase.utils";
import "./homepage.styles.scss";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../../redux/user/user.selectors";

function Homepage({ currentUser }) {
  return (
    <React.Fragment>
      <div className="navbar">
        {currentUser ? null : (
          <Link to="/login" style={{ textDecoration: "none" }}>
            <Button variant="contained" color="primary">
              Sign In
            </Button>
          </Link>
        )}
        {currentUser ? null : (
          <Link to="/register" style={{ textDecoration: "none" }}>
            <Button
              variant="contained"
              color="primary"
              style={{ marginLeft: "10px" }}
            >
              Register
            </Button>
          </Link>
        )}
        {currentUser ? (
          <Button
            variant="contained"
            color="secondary"
            onClick={() => auth.signOut()}
            style={{ marginLeft: "10px" }}
          >
            Sign Out
          </Button>
        ) : null}
      </div>
    </React.Fragment>
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

export default connect(mapStateToProps, null)(Homepage);
