import axios from "axios";
import React, { Component, Fragment } from "react";
import { Link } from 'react-router-dom';
import Navbar from "../components/Navbar";


import "./styles/styleAuthentication.css";

class CreatePlayer extends React.Component {
  state = {
    username: "",
    email: "",
    password: "",
    nama: "",
    umur: "",
    showData: true,
    disabled: false,
  };

  usernameHandleOnChange = (event) => {
    this.setState({ username: event.target.value });
  }
  emailHandleOnChange = (event) => {
    this.setState({ email: event.target.value });
  }
  passwordHandleOnChange = (event) => {
    this.setState({ password: event.target.value });
  }
  umurHandleOnChange = (event) => {
    this.setState({ umur: event.target.value });
  }
  namaHandleOnChange = (event) => {
    this.setState({ nama: event.target.value });
  }

  send = (event) => {
    const { history } = this.props
    event.preventDefault();
    axios.post('https://api-kel3.herokuapp.com/auth/register',{
      username: this.state.username,
      email: this.state.email,
      password: this.state.password,
      nama: this.state.nama,
      umur: this.state.umur
    })
    .then((res) => {
      console.log(res)
      
      history.push('/login')
    })
    .catch((error)=> {
      console.log(error)
      alert("Data Invalid")
    })
  }

  //check user input value
  showPlayer = () => {
    if (this.state.showData) {
      return (
        <Fragment>
          <div class="container-sm">
            <div class="row justify-content-center">
              <div class="col-md-5">
                <p>
                  Username: <strong>{this.state.username}</strong>
                </p>
                <br />
                <p>
                  Email: <strong>{this.state.email}</strong>
                </p>
                <br />
                <p>
                  Password: <strong>{this.state.password}</strong>
                </p>
                <br />
                <p>
                  Nama: <strong>{this.state.nama}</strong>
                </p>
                <br />
                <p>
                  Umur: <strong>{this.state.umur}</strong>
                </p>
                <br />
              </div>
            </div>
          </div>
        </Fragment>
      );
    }
  }

  render() {
    return (
      <Fragment>
        <Navbar/>
        <div className="auth-container">
          <div className="auth-card-container">
            <h4 className="text-title">SIGN UP</h4>
            <form id="form" className="form-container" onSubmit={this.handleSubmit} >
              <div className="mb-3">
                <input type="text" name="username" className="form-control" id="username"
                  placeholder="Username"  onChange={this.usernameHandleOnChange}/>
              </div>
              <div className="mb-3">
                <input type="email" name="email" className="form-control" id="email"
                  placeholder="Email" onChange={this.emailHandleOnChange}/>
              </div>
              <div className="mb-3">
                <input type="password" name="password" className="form-control" id="password" placeholder="Password" onChange={this.passwordHandleOnChange}/>
              </div>
              <div className="mb-3">
                <input type="text" name="nama" className="form-control" id="nama"
                  placeholder="Nama" onChange={this.namaHandleOnChange}/>
              </div>
              <div className="mb-3">
                <input type="number" name="umur" className="form-control" id="umur"
                  placeholder="Umur" onChange={this.umurHandleOnChange}/>
              </div>
              <button class="btn btn-dark button-login" onClick={this.send}>REGISTER</button>
              <Link to='/login' className="link-style link-register">Already have an account? Sign In</Link>
            </form>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default CreatePlayer;
