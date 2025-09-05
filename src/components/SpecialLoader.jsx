import React, { useEffect } from "react";
import gift from '../assets/gift.png';

const SpecialLoader = ({ nextStep }) => {
  useEffect(() => {
    const timer = setTimeout(() => nextStep(), 4000);
    return () => clearTimeout(timer);
  }, [nextStep]);

  return (
    <div className="centered">
      <h2>🎁 Special Preparing Loading...</h2>
      <img src={gift} alt="gift" className="gift-loader" />
    </div>
  );
};

export default SpecialLoader;
