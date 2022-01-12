import React, {useState}  from "react";
import logo from "../assets/paneer.jpg";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import ReorderIcon from '@material-ui/icons/Reorder';

function Navbar() {

  const [showLinks, setShowLinks] = useState(false);
  function toggleNavbar(){
    setShowLinks(!showLinks);
  }

  return (
    <div className="navbar">
      <div className="leftSide" id={ showLinks ? "open" : "close" }>
        <img src={logo} alt="site logo" /> <span>Lukufood</span>
        <div className="hiddenLinks">
          <Link to="/">Home</Link>
          <Link to="/menu">Menu</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
      <div className="rightSide">
        <Link to="/">Home</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <button onClick={toggleNavbar}>
            <ReorderIcon />
        </button>
      </div>

    </div>
  );
}

export default Navbar;
