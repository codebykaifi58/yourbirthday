import React, { useState, useEffect } from "react";

const Balloon = ({ style }) => (
  <div className="balloon" style={style}></div>
);

const BalloonsAroundHeader = ({ count }) => {
  const [balloons, setBalloons] = useState([]);

  useEffect(() => {
    const newBalloons = Array.from({ length: count }).map(() => ({
      left: Math.random() * 100 + "%",
      top: Math.random() * 40 + "%",
      animationDelay: Math.random() * 5 + "s",
      background: `radial-gradient(circle, #f06, #f9a)`,
      width: 20 + Math.random() * 20 + "px",
      height: 25 + Math.random() * 30 + "px",
    }));
    setBalloons(newBalloons);
  }, [count]);

  return (
    <div className="balloons-container">
      {balloons.map((style, i) => (
        <Balloon key={i} style={style} />
      ))}
    </div>
  );
};

const Sparkle = ({ count }) => {
  const [sparkles, setSparkles] = useState([]);

  useEffect(() => {
    const newSparkles = Array.from({ length: count }).map(() => ({
      left: Math.random() * 100 + "%",
      top: Math.random() * 20 + "%",
      animationDelay: Math.random() * 3 + "s",
      size: 8 + Math.random() * 6 + "px",
    }));
    setSparkles(newSparkles);
  }, [count]);

  return (
    <>
      {sparkles.map((style, i) => (
        <div
          key={i}
          className="sparkle"
          style={{
            left: style.left,
            top: style.top,
            animationDelay: style.animationDelay,
            width: style.size,
            height: style.size,
          }}
        />
      ))}
    </>
  );
};

export default function CelebrationHeader() {
  return (
    <div className="celebrate-header-wrapper">
      <h1 className="celebrate-header">Let's Celebrate More 🎉</h1>
      <BalloonsAroundHeader count={40} />
      <Sparkle count={15} />
    </div>
  );
}
