import React from "react";

import "./register.styles.scss";
import SignUp from "../../components/signupform/signupform";

function Register() {
  return (
    <React.Fragment>
      <div className="login__page">
        <SignUp />
      </div>
    </React.Fragment>
  );
}

export default Register;
