import React, { Component, Fragment } from "react";
import Navbar from "../components/Navbar";


import "./styles/styleAuthentication.css";

class SuccessForgot extends Component {
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

  render() {
    return (
      <Fragment>
        <Navbar/>
        <div className="auth-container container-forgot-pwd">
          <div className="auth-card-container card-forgot-pwd">
            <h4 className="text-title">FORGOT PASSWORD</h4>
            <form id="form" className="form-container" onSubmit={this.handleSubmit}>
              <p class="forgot-pwd-txt">We already send you an email to change your password.</p>
              <div className="mb-3">
              </div>
            </form>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default SuccessForgot;
