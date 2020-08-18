import React from "react";
import Lottie from "react-lottie";
import animationData from "../../lottie/25114-background-slide.json";
import animeData from "../../lottie/29522-space-tour.json";
import { FcGoogle } from "react-icons/fc";
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

import { IoLogoFacebook } from "react-icons/io";

import "./login.styles.scss";

function Login() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const defOptions = {
    loop: true,
    autoplay: true,
    animationData: animeData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <React.Fragment>
      <div className="login__page">
        <Lottie options={defaultOptions} style={{ width: "100%" }} />

        <div className="login__container">
          <div className="login__container-1">
            <Lottie
              options={defOptions}
              style={{ width: "120%", borderTopLeftRadius: "5px" }}
            />
          </div>
          <div className="login__container-2">
            <form>
              <h1 style={{ fontSize: "36px" }}>LOGIN</h1>
              <input
                type="email"
                className="form__input"
                placeholder="Enter your Email"
              />
              <input
                type="password"
                className="form__input"
                placeholder="Enter your Password"
              />
              <button>Sign In</button>
              <div className="link">
                <a href="/">New User ? </a>
                <a href="/">Forgot Password ?</a>
              </div>

              <p>Or Sign In With : </p>
              <div className="login__icons-container">
                <FcGoogle style={{ margin: "0 10px", cursor: "pointer" }} />
                <FaTwitter
                  style={{
                    margin: "0 10px",
                    color: "#00acee",
                    cursor: "pointer",
                  }}
                />
                <IoLogoFacebook
                  style={{
                    margin: "0 10px",
                    color: "#3b5998",
                    cursor: "pointer",
                  }}
                />
                <FaGithub style={{ margin: "0 10px", cursor: "pointer" }} />
              </div>
            </form>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Login;
