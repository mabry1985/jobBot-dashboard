import React from "react";
import styled from "styled-components";

const AdminDiv = styled.div`
  float: right;
  padding-right: 40px;

  label{
    display: none;
  }
`;

class Admin extends React.Component{
  constructor(props){
    super(props)

    this.state ={
      password: ""
    }
  }
  
  handleSubmitPassword = e => {
    e.preventDefault();
    
    if (this.props.isAdmin === true ) {
      this.props.onError("Already Logged in");
    }else if (this.state.password === "qwerty" ) {
      this.props.onPasswordConfirm();
    } else {
      this.props.onError("Wrong Password");
    }
  }

  handlePasswordChange = e => {
    this.setState({
      password: e.target.value
    });
  } 

  render(){
    return (
      <AdminDiv>
        <form onSubmit={this.handleSubmitPassword}>
          <label htmlFor="password">Enter Password:</label>
          <br />
          <input 
            id="password" 
            onChange={this.handlePasswordChange} 
            placeholder="Login"/> 
        </form>
      </AdminDiv>
    );
  }
};

export default Admin;
