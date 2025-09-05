import React, { useEffect } from "react";

import CelebrationHeader from "./CelebrationHeader";
const Balloons = ({ nextStep }) => {
  useEffect(() => {
    const timer = setTimeout(() => nextStep(), 5000);
    return () => clearTimeout(timer);
  }, [nextStep]);

  return (
    <div className="centered">
      <h2>🎈 Let's Celebrate More! <br />  Madam Ji 🥹💖</h2>
      <p> Yeahhhhhh 🎈🎈 </p>
      <div className="balloons">
        {[...Array(20)].map((_, i) => (
          <div key={i} className="balloon" />
        ))}
      </div>
      
       <CelebrationHeader />
    </div>
  );
};

export default Balloons;
