import React from "react";

import "./login.styles.scss";
import SignIn from "../../components/signinform/signinform";

function Login() {
  return (
    <React.Fragment>
      <div className="login__page">
        <SignIn />
      </div>
    </React.Fragment>
  );
}

export default Login;
