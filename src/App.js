import React from "react";
import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import Home from "./pages/Home";
import Gamelist from "./pages/Gamelist";
import Gamelist2 from "./pages/Gamelist2";
import Gamesuit from "./pages/Gamesuit";
import Edit from "./pages/Edit";
import RockPaperScissors from "./pages/Game/Rock-Paper-Scissors/RockPaperScissors";
import RockPaperScissorsDetail from "./pages/Game/Rock-Paper-Scissors/RockPaperScissorsDetail";
import PlayerInfo from './pages/PlayerInfo';
import NotFound from "./pages/NotFound";
import SuccessForgot from "./pages/SuccessForgot";
import SuccessReset from "./pages/SuccessReset";
import SuccessUpdate from "./pages/SuccessUpdate";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/forgot-password" component={ForgotPassword} />
          <Route exact path="/success-forgot" component={SuccessForgot} />
          <Route exact path="/reset-password/:id/:token" component={ResetPassword} />
          <Route exact path="/success-reset" component={SuccessReset} />
          <Route exact path="/success-update" component={SuccessUpdate} />
          <Route path="/gamelist" component={Gamelist} />
          <Route path="/gamelist2" component={Gamelist2} />
          <Route path="/gamesuit" component={Gamesuit} />
          <Route path="/edit" component={Edit} />
          <Route exact path="/RockPaperScissors/Playing" component={RockPaperScissors} />
          <Route exact path="/RockPaperScissors" component={RockPaperScissorsDetail} />
          <Route exact path='/playerInfo/:id' component={PlayerInfo} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
