import React from "react";
import styled from "styled-components";

const AdminDiv = styled.div`
  float: right;
  padding-right: 52px;

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

    const adminForm = (
        <form onSubmit={this.handleSubmitPassword}>
          <label htmlFor="password">Enter Password:</label>
          <br />
          <input 
            id="password" 
            onChange={this.handlePasswordChange} 
            placeholder="Secret Password?"/> 
        </form>
    )

    const content = this.props.loginVisible ? adminForm : null
    
    return (
      <AdminDiv>
        {content}
      </AdminDiv>
    );
  }
};

export default Admin;
