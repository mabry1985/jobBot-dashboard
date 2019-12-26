import React from "react";
import styled from "styled-components";

const AdminDiv = styled.div`
  width: 580px;
  height: 600px;
  background-color: #f9f9f9;
  padding: 40px;
  border-radius: 5px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
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
      this.props.onPasswordSwitch();
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
            onChange={this.handlePasswordChange} /> 
        </form>
      </AdminDiv>
    );
  }
};

export default Admin;
