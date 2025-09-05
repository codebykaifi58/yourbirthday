import React from "react";
import "../App.css";

const HeartBackground = () => {
  return (
    <div className="heart-bg">
      {[...Array(30)].map((_, i) => (
        <div key={i} className="heart" style={{ left: `${Math.random() * 100}%`, animationDuration: `${4 + Math.random() * 6}s` }} />
      ))}
    </div>
  );
};

export default HeartBackground;
