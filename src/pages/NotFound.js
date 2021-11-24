import React, { Component, Fragment } from "react";
import { Container } from "reactstrap";
import Navbar from "../components/Navbar";

class Home extends Component {
  render() {
    return (
      <Fragment>
        <Navbar/>
        <Container className="p-4">
          <h1>Not Found</h1>
        </Container>
      </Fragment>
    );
  }
}

export default Home;
