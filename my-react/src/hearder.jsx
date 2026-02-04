import React from "react";
import "./header.css";

// ✅ apne paths adjust kar lena (same folder mein hon to yahi chalega)
import cloudPink from "./cloud pink.png";
import logo from "./logo mareee.png";
import birds from "./bird.png";
import bicycle from "./bicycle.png";

// import leafDark from "./leave dark.png";
import bigLeaf from "./big leave.png";
import leafLight from "./leave light.png";
import petal from "./pettal leave.png";
// import smallLeaf from "./leave.png";

export default function MareeHero() {
  return (
    <section className="mareeHero">
      {/* Decorative layers */}
      <img className="d cloud floatSlow" src={cloudPink} alt="cloud" />
      <img className="d bird floatBird" src={birds} alt="bird" />
      <img className="d bicycle floatBike" src={bicycle} alt="bicycle" />

      {/* <img className="d leafDark floatSlow" src={leafDark} alt="leaf dark" /> */}
      <img className="d bigLeaf floatSlow2" src={bigLeaf} alt="big leaf" />
      <img className="d leafLight floatSlow" src={leafLight} alt="leaf light" />

      <img className="d petal1 floatPetal" src={petal} alt="petal" />
      <img className="d petal2 floatPetal2" src={petal} alt="petal" />
      {/* <img className="d smallLeaf1 floatSlow2" src={smallLeaf} alt="leaf" />
      <img className="d smallLeaf2 floatSlow" src={smallLeaf} alt="leaf" /> */}

      {/* random dots */}
      <span className="dot dot1" />
      <span className="dot dot2" />
      <span className="dot dot3" />
      <span className="dot dot4" />

      {/* Center content */}
      <div className="center">
        <img className="logo" src={logo} alt="Maree" />
        <p className="subtitle">
          Welcome to Marée, a brand new illustration &amp; design portfolio just
          <br />
          waiting for your work to start populating its templates!
        </p>

        <button className="purchaseBtn" type="button">
          PURCHASE
        </button>
      </div>
    </section>
  );
}
