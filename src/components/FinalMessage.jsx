import React, { useEffect, useState } from "react";

const FinalMessage = () => {
  const fullText = `
      You are the most precious part of my life,
      and every moment with you is a treasure. 💖
      I can't imagine my days without your smile,
      your voice, and your love. 🥹💫

      This journey with you means everything to me,
      and I’m so lucky to have you. 💑🌈
      `;

  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + fullText[index]);
        setIndex((prev) => prev + 1);
      }, 50); // speed of typing
      return () => clearTimeout(timeout);
    }
  }, [index, fullText]);

  return (
    <div className="centered">
      <h2 className="celebrate-header">🎁 Final Message for My Alizi 💖💑</h2>
      <div className="big-message typing-effect">{displayedText}</div>
    </div>
  );
};

export default FinalMessage;
