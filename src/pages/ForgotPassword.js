import React, { Component, Fragment } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios'
import Navbar from "../components/Navbar";

import "./styles/styleAuthentication.css";

class ForgotPassword extends Component {
  state = {
    email: null
  };

  setEmail = (event) => {
    this.setState({ email: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const { email } = this.state;

  };

  send = () => {
    const { history } = this.props
    axios.post('https://api-kel3.herokuapp.com/forgot-password', {

      email: this.state.email

    })
      .then((res) => {
        console.log(res)
        return history.push("/success-forgot")
      })
      .catch((error) => {
        console.log(error)
      })
  }


  render() {
    return (
      <Fragment>
        <Navbar />
        <div className="auth-container container-forgot-pwd">
          <div className="auth-card-container card-forgot-pwd">
            <h4 className="text-title">FORGOT PASSWORD</h4>
            <form id="form" className="form-container" onSubmit={this.handleSubmit}>
              <p class="forgot-pwd-txt">We will send you an email to change your password. <br /> Please input your email below!</p>
              <div className="mb-3">
                <input type="email" onChange={this.setEmail} name="email" className="form-control" id="email"
                  placeholder="Email" />
              </div>
              <button class="btn btn-dark button-login button-forgot-pwd" onClick={this.send}>SUBMIT</button>
            </form>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default ForgotPassword;
