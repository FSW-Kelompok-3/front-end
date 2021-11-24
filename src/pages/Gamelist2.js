import React, { Component, Fragment } from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

import gambar from "./Game/img/gambar.png";
import rockpaperscissors from "./Game/img/rock-paper-scissors.png";
import adventure from "./Game/img/tombraider.jpeg";
import action from "./Game/img/fortnite2.jpeg";
import image from "./Game/img/image.jpg";
import Cards from "../Cards";
import "../App.css";

class GameList2 extends Component {
  render() {
    return (
      <Fragment>
        <Navbar/>
        <Cards />
        <Container className="p-4">
          <h1 className="text-center">Other Popular Game</h1>
          <Row md="4" sm="2" xs="1" className="justify-content-center p-4">
            <Col className="d-flex justify-content-center text-center flex-column m-3">
              <Link to="/RockPaperScissors">
                <img src={rockpaperscissors} className="img-thumbnail" alt="tidak tersedia" />
                <p>Rock-Paper-Scissors</p>
              </Link>
            </Col>
            <Col className="d-flex justify-content-center text-center flex-column  m-3">
              <Link to="/gameDetail">
                <img src={adventure} className="img-thumbnail" alt="tidak tersedia" />
                <p>Adventure</p>
              </Link>
            </Col>
            <Col className="d-flex justify-content-center text-center flex-column  m-3">
              <Link to="/gameDetail">
                <img src={action} className="img-thumbnail" alt="tidak tersedia" />
                <p>Action</p>
              </Link>
            </Col>
            <Col className="d-flex justify-content-center text-center flex-column m-3">
              <Link to="/gameDetail">
                <img src={image} className="img-thumbnail" alt="tidak tersedia" />
                <p>Game1</p>
              </Link>
            </Col>
            <Col className="d-flex justify-content-center text-center flex-column m-3">
              <Link to="/gameDetail">
                <img src={gambar} className="img-thumbnail" alt="tidak tersedia" />
                <p>Game1</p>
              </Link>
            </Col>
            <Col className="d-flex justify-content-center text-center flex-column m-3">
              <Link to="/gameDetail">
                <img src={gambar} className="img-thumbnail" alt="tidak tersedia" />
                <p>Game1</p>
              </Link>
            </Col>
            <Col className="d-flex justify-content-center text-center flex-column m-3">
              <Link to="/gameDetail">
                <img src={gambar} className="img-thumbnail" alt="tidak tersedia" />
                <p>Game1</p>
              </Link>
            </Col>
            <Col className="d-flex justify-content-center text-center flex-column m-3">
              <Link to="/gameDetail">
                <img src={gambar} className="img-thumbnail" alt="tidak tersedia" />
                <p>Game1</p>
              </Link>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default GameList2;
