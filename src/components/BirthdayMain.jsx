import React from "react";
import cake from "../assets/cake.png";

const BirthdayMain = ({ nextStep }) => {
  return (
    <div className="centered">
      <img src={cake} alt="cake" className="cake-img" />
      <h1>🎂 Happy Birthday <span className="highlight">[Alizi ]</span>!</h1>
      <h3>It's your special day 💖</h3>
      <p>madam ji !</p>
      <button className="btn" onClick={nextStep}>Continue the Magic →</button>
    </div>
  );
};

export default BirthdayMain;
