import React, { useEffect, useState } from "react";
import gift from '../assets/gift.png'
const Celebrate = ({ nextStep }) => {
  const [showEmojis, setShowEmojis] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowEmojis(false);
      nextStep();
    }, 4000);
    return () => clearTimeout(timer);
  }, [nextStep]);
  return (
    <div className="centered">
      <img src={gift} className="vibrate" alt="gift" width={100} />
      <h1 className="celebrate-heading">🎉 Time to Celebrate! 🎉</h1>
      <p> Alizi 🎉 </p>
      {showEmojis && (
        <div className="emojiRain">
          {[...Array(40)].map((_, i) => (
            <span key={i}>🎊</span>
          ))}
        </div>
      )}
    </div>
  );
};

export default Celebrate;
