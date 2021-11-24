import React, { Component, Fragment } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';
import Navbar from "../components/Navbar";

import "./styles/styleAuthentication.css";
class Response extends String {
  json = () => {
    return JSON.parse(this);
  };
}

// function mockFetch(url, { body }) {
//   const { username, password } = body;

//   // belum di connect ke database
//   // if (email !== "admin@admin.com" || password !== "password") {
//   //   return Promise.reject("Email atau password salah!");
//   // }

//   return Promise.resolve(new Response(JSON.stringify({ accessToken: "test token" })));
// }

class Login extends Component {
  state = {
    username: null,
    password: null,
  };

  setEmail = (event) => {
    this.setState({ username: event.target.value });
  };

  setPassword = (event) => {
    this.setState({ password: event.target.value });
  };

  

  send = () => {
    const { history } = this.props
    axios.post('https://api-kel3.herokuapp.com/auth/login',{
      username: this.state.username,
      password: this.state.password
    })
    .then((res) => {
      console.log(res)
      localStorage.setItem('token', res.data.accessToken)
      history.push('/RockPaperScissors/Playing')
    })
    .catch((error)=> {
      console.log(error)
      alert("username atau password salah")
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();

    const { username, password } = this.state;
    const { history } = this.props;

    // mockFetch("https://api-kel3.herokuapp.com/auth/login", {
    //   body: {
    //     username,
    //     password,
    //   },
    // })
    //   .then((response) => {
    //     return response.json();
    //   })
    //   .then((json) => {
    //     localStorage.setItem("token", json.accessToken);
    //     return history.push("/RockPaperScissors/Playing");
    //   })
    //   .catch((err) => {
    //     return alert(err);
    //   });
  };

  render() {
    return (
      <Fragment>
        <Navbar/>
        <div className="auth-container">
          <div className="auth-card-container">
            <h4 className="text-title">SIGN IN</h4>
            <form id="form" className="form-container" onSubmit={this.handleSubmit}>
              <div className="mb-3">
                <input type="text" onChange={this.setEmail} name="username" className="form-control" id="username"
                  placeholder="Username" />
              </div>
              <div className="mb-3">
                <input type="password" onChange={this.setPassword} name="password" className="form-control" id="password" placeholder="Password" />
                <Link to='/forgot-password' className="link-style link-forgot-pwd">Forgot password? </Link>
              </div>
              <button class="btn btn-dark button-login" onClick={this.send}>LOGIN</button>
              <Link to='/register' className="link-style link-register">Don't have an account? Sign Up </Link>
            </form>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Login;
