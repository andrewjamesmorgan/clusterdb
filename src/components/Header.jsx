import { useState } from 'react';
import { Link, useLocation } from "react-router-dom";
import '../css/topnav.css';

export default function Header() {
  const pathName = useLocation().pathname;
  const [showingBurger, setShowingBurger] = useState(false);

  function selectMenu() {
    setShowingBurger(!showingBurger);
  }

  function hideBurgerMenu() {
    var x = document.getElementById("myTopnav");
    if (showingBurger) {
      x.className = "topnav";
      setShowingBurger(false);
    }
  }

  return (
    <div className={showingBurger ? "topnav responsive" : "topnav"} id="myTopnav">
      <nav>
        <Link to="/" 
          onClick={hideBurgerMenu}
          className={pathName === "/home" || pathName === "/" ? "active" : "not-active"}>Home</Link>
        <a href="https://clusterdb.com/legacy/" target="_blank" rel="noopener noreferrer"
          className="not-active">Legacy content</a>        <Link to="/contact"
          onClick={hideBurgerMenu}
          className={pathName === "/contact" ? "active" : "not-active"}>Contact me</Link>
        <Link to="/about"
          onClick={hideBurgerMenu}
          className={pathName === "/about" ? "active" : "not-active"}>About me</Link>
        {/* eslint-disable-next-line */}
        <a href="#" className="icon" onClick={selectMenu}>
          <i className="fa fa-bars"></i>
        </a>
      </nav>
    </div>
  );
}