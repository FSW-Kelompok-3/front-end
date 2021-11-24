import React, { Component, Fragment } from 'react';
import { Container, Button } from 'reactstrap';
import gambar from './Game/img/gambar.png';

import Navbar from '../components/NavigationBar';

class GameDetail extends Component {
  
  render() {
    return (
      <Fragment>
        <Navbar />
        <Container className='p-4'>

          <img src={gambar} className="img-fluid rounded mx-auto d-block p-4" alt="tidak tersedia"/>
          <h1 className="text-center">Game 1</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipssum dolor sit amet, consectetur adipisicing elit, sed do eioumos tempor incidunt ut labore. 
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipssum dolor sit amet, consectetur adipisicing elit, sed do eioumos tempor incidunt ut labore</p>

          <div className="d-flex justify-content-center">
            <Button
              color="primary"
              size="lg"
              className="px-5"
            >
              <h3>Play</h3>
            </Button>
          </div>
          
        </Container>
      </Fragment>
    );
  }
}

export default GameDetail;
