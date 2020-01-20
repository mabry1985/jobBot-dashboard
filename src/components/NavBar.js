import React from 'react';
import botLogo from '../images/bot-logo.png';
import Admin from './Admin';

class NavBar extends React.Component {
  constructor(props){
    super(props)
    
    this.state = { 
      loginVisible: false,
      secretCount: 0 
    }
  }

  handleLogoClick = () =>{
    this.setState({ secretCount: this.state.secretCount + 1})
    
    if (this.state.secretCount === 2) {
      this.setState({ loginVisible: true });
    }
  }

  render(){
    const adminForm = (
        <Admin
          loginVisible={this.state.loginVisible}
          onPasswordConfirm={this.props.onPasswordConfirm}
          onError={this.props.onError}
        />
      );
      
    const content = !this.props.isAdmin ? adminForm : null

    return (
      <nav
        className="navbar"
        style={{
          backgroundColor: "#f9f9f9",
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
          onClick={this.handleLogoClick}
          alt="bot-logo"
        />

        {content}
      </nav>
    );
  }
}

export default NavBar