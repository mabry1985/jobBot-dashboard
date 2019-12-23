import React from 'react';
import botLogo from '../images/bot-logo.png';

const NavBar = props => {
  return (
    <nav
      className="navbar navbar-light bg-light"
      style={{
        backgroundColor: "#F8F8FF",
        boxShadow:
          "0 0px 8px 0 rgba(0, 0, 0, 0.2), 0 0px 15px 0 rgba(0, 0, 0, 0.19)"
      }}
    >
      <h4 className="navbar-brand" style={{ paddingRight: 5 }}>
        jobBot
      </h4>
      <img
        src={botLogo}
        style={{ paddingTop: 18 }}
        width="30"
        height="49"
        className="d-inline-block align-top"
        alt="bot-logo"
      />
    </nav>
  );
}

export default NavBar