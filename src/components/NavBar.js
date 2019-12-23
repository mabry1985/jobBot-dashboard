import React from 'react';
import botLogo from '../images/bot-logo.png';

const NavBar = props => {
  return (
    <nav 
      className="navbar navbar-light bg-light" 
      style={{ borderBottom: 'solid 1px teal'}}>
      <h4 className="navbar-brand">jobBot</h4>
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