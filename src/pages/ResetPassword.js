import React, { Component, Fragment } from "react";
import { Link } from 'react-router-dom';
import axios from "axios";
import Navbar from "../components/Navbar";

import "./styles/styleAuthentication.css";

class ResetPassword extends Component {
  state = {
    password: "",
    confirmP: "",

    showData: true,
    disabled: false,
  };

  passwordHandleOnChange = (event) => {
    this.setState({ password: event.target.value });
  }
  confirmPHandleOnChange = (event) => {
    this.setState({ confirmP: event.target.value });
  }
  
  

  send = (event) => {
    const { history } = this.props
    const { id, token } = this.props.match.params;
    event.preventDefault();
    axios.post(`https://api-kel3.herokuapp.com/reset-password/${id}/${token}`,{
      password: this.state.password,
      confirmP: this.state.confirmP
    }, {headers: { 'content-type': 'application/json;charset=UTF-8', Authorization: localStorage.getItem('token') }})
    .then((res) => {
      console.log(res)
      history.push('/success-reset')
    })
    .catch((error)=> {
      console.log(error)
      alert("Cek Lagi Password dan Confirm Passwordnya")
    })
  }

  render() {
    return (
      <Fragment>
        <Navbar/>
        <div className="auth-container">
          <div className="auth-card-container">
            <h4 className="text-title">Reset Password</h4>
            <form id="form" className="form-container" onSubmit={this.handleSubmit} >
              <div className="mb-3">
                <input type="password" name="username" className="form-control" id="username"
                  placeholder="New Password"  onChange={this.passwordHandleOnChange}/>
              </div>
              <div className="mb-3">
                <input type="password" name="password" className="form-control" id="password" placeholder="Confrim Password" onChange={this.confirmPHandleOnChange}/>
              </div>
              <button class="btn btn-dark button-login" onClick={this.send}>Reset Password</button>
            </form>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default ResetPassword;



