import React, { Component, Fragment } from "react";
import { Link } from 'react-router-dom';
import Navbar from "../components/Navbar";

import "./styles/styleAuthentication.css";

class SuccessUpdate extends Component {
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
            <h4 className="text-title">Edit Player</h4>
            <form id="form" className="form-container" onSubmit={this.handleSubmit}>
              <p class="forgot-pwd-txt">Success to change your profile.</p>
              <div className="mb-3">
              <Link to='/'><button class="btn btn-dark button-login"  >Back To Home</button></Link>
              </div>
            </form>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default SuccessUpdate;
