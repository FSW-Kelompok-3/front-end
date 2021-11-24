import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";
import rockpaperscircos from "./images/gamesuit.jpeg";
import dalgona from "./images/dalgona2.jpeg";
import redlight from "./images/redlight.jpeg";

import marble from "./images/marble2.jpeg";
import battleroyale from "./images/pullmine.jpeg";

function Cards() {
  return (
    <div className="cards">
      <h1>Check out these EPIC games!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem img src={rockpaperscircos} text="Play traditional Rock Scissor Paper with a Twist" label="Suit Game" path="/RockPaperScissors" />
            <CardItem img src={dalgona} text="The famous dalgona challenge game" label="Dalgona Challege" path="/gamelist" />
          </ul>
          <ul className="cards__items">
            <CardItem img src={marble} text="Players flick their marbles, and try to hit the opponent target" label="Marble" path="/gamelist" />
            <CardItem img src={redlight} text="Green Light players move towards finish line" label="Red Light Green Light" path="/gamelist" />
            <CardItem img src={battleroyale} text="Two teams against each other in a test of strength" label="Tug of War" path="/gamelist" />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
