import React, { useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import "./App.css";
import Login from "./pages/login/login";
import Homepage from "./pages/homepage/homepage";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { setCurrentUser } from "./redux/user/user.actions";
import { selectCurrentUser } from "./redux/user/user.selectors";

function App({ setCurrentUser }) {
  useEffect(() => {
    //check Auth
    const unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      }

      setCurrentUser(userAuth);
    });
    //clean up
    return () => {
      unsubscribeFromAuth();
    };
  }, []);

  return (
    <div>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/signin" render={Login} />
      </Switch>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
