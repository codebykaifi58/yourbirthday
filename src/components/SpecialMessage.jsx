import React, { useState } from "react";
import envelope from '../assets/envelop.png'

const messages = [
  "You're truly special 💕",
  "Wishing you all the happiness!",
  "This year is YOUR year! 🌟",
  "Enjoy every moment 🎉"
];

const SpecialMessage = ({ nextStep }) => {
  const [index, setIndex] = useState(0);

  const nextMessage = () => {
    if (index < messages.length - 1) setIndex(i => i + 1);
    else nextStep();
  };

  return (
    <div className="centered">
      <h2>💌 Special Message</h2>
      <img src={envelope} alt="envelope" className="envelope" onClick={nextMessage} />
      <p className="message-box">{messages[index]}</p>
    </div>
  );
};

export default SpecialMessage;
