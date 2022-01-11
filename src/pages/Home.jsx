import React from "react";
import { Link } from "react-router-dom";
import Banner from "../assets/food.jpeg";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${ Banner })` }} >
      <div className="headerContainer">
        <h1 style={{ fontWeight: "bold" }}>Food Corner</h1>
        <p>DELICIOUS FOOD AT A CLICK </p>
        <Link to="/menu">
          <button>Order Now</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
