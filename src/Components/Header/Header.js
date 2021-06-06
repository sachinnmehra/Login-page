import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { ReactComponent as Logo } from "../../Assets/crown.svg";
import { auth } from "../../Firebase/Firebase.utils";

import "./Header.css";
const header = ({ currentUser }) => {
  return (
    <div className="header">
      <Link className="logo-container" to="/signin">
        <Logo className="logo" />
      </Link>
      <div className="options">
        {currentUser ? (
          <div className="option" onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
        ) : (
          <Link to="/signin">SIGN IN</Link>
        )}
      </div>
    </div>
  );
};

const mapStatetoProps = ({ user: { currentUser } }) => ({
  currentUser,
  //name will be the actual property we want to pass in //
});

export default connect(mapStatetoProps)(header);
