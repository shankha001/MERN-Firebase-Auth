import React from "react";
import "./404.styles.scss";
import logo from "../../assets/29894-error-404-page.gif";
import { Link } from "react-router-dom";

function NoMatch() {
  return (
    <div>
      <img className="gif" src={logo} alt="loading..." />
      <Link to="/">
        <button className="btn-home">Redirect To Homepage ?</button>
      </Link>
    </div>
  );
}

export default NoMatch;
