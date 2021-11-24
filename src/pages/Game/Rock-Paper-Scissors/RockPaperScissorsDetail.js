import React, { Component, Fragment } from "react";
import { Container, Button, Navbar } from "reactstrap";
import { Link } from "react-router-dom";
import rockpaperscircos from "./assets/img/rock-paper-scissors.png";
import Navibar from "../../../components/Navbar";

import {WhatsappShareButton, WhatsappIcon, FacebookShareButton, FacebookIcon} from 'react-share';

import LeaderBoard from '../../../components/LeaderBoard';

class GameDetail extends Component {
  render() {
    return (
      <Fragment>
      <Navibar/>
        <Container className="p-4">
          <img src={rockpaperscircos} className="img-fluid rounded mx-auto d-block p-4" alt="tidak tersedia" />
          <h1 className="text-center">Play Traditional Rock Scissors Papper Game With a Twist</h1>
          <h2 className="text-center"> Rock wins against scissors; paper wins against rock; and scissors wins against paper </h2>
          
           <WhatsappShareButton url={"https://client-kel3.herokuapp.com/"} title={"Ayo main Game Suit"}> 
            <WhatsappIcon size={32} round />
          </WhatsappShareButton>
           <FacebookShareButton
              url={"https://github.com/"}
              quote={"Play Game"}
              description={"Game suit"}
              className="Demo__some-network__share-button"
            >
              <FacebookIcon size={32} round />
            </FacebookShareButton>
          
          
          
          
          <div className="d-flex justify-content-center">
            <Link to="/RockPaperScissors/Playing">
              <Button color="primary" size="lg" className="px-5">
                <h3>Play</h3>
              </Button>
            </Link>
          </div>
        </Container>
        <LeaderBoard />
      </Fragment>
    );
  }
}

export default GameDetail;
