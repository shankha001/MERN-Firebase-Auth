import React, { useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

import "./App.css";
import Login from "./pages/login/login";
import Homepage from "./pages/homepage/homepage";

function App() {
  useEffect((userAuth) => {
    //check Auth

    const unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        console.log(userRef);
      }

      // setCurrentUser(userAuth);
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

export default App;
