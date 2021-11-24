import React, { useState, useEffect, Fragment } from "react";

import { Link} from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);
  const [user, setUser] = useState(false)

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);


  useEffect(() => {
    const checkToken=()=>{
      const token = localStorage.getItem('token');
    if(token){
      setUser(true)
    }else{
      setUser(false)
    }
  }

    checkToken();

    window.addEventListener("storage",checkToken);

    return()=>{
      window.removeEventListener("storage",checkToken);
    }
  },[])

  const funcLogOut=()=>{
    localStorage.removeItem('token');
    setUser(localStorage.getItem('token'));
    // history.push("/login")
  }

  const loginRegister =
    <Fragment>
      <li className="nav-item">
        <Link to="/register" className="nav-links" onClick={closeMobileMenu}>
          Register
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/login" className="nav-links" onClick={closeMobileMenu}>
          Log In
        </Link>
      </li>
    </Fragment>

  const logOut =
    <div>
      <li className="nav-item">
        <Link to="/login" className="nav-links" onClick={funcLogOut}>
          Log Out
        </Link>
      </li>
    </div>

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            BINAR GAMES
            <i className="fab fa-typo3" />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/gamelist2" className="nav-links" onClick={closeMobileMenu}>
                Game List
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/edit" className="nav-links" onClick={closeMobileMenu}>
                Edit Player
              </Link>
            </li>
              {!user?(loginRegister):(logOut)}
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;