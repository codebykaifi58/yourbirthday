import React, { useState } from "react";
import "./App.css";
import HeartBackground from "./components/HeartBackground";
import SpecialLoader from "./components/SpecialLoader";
import Celebrate from "./components/Celeberate";
import BirthdayMain from "./components/BirthdayMain";
import Balloons from "./components/Ballon";
import SpecialMessage from "./components/SpecialMessage";
import MomentsCarousel from "./components/MomentCrousel";
import FinalMessage from "./components/FinalMessage";

function App() {
  const [step, setStep] = useState(0);

  const nextStep = () => setStep(prev => prev + 1);

  return (
    <div className="app">
      <HeartBackground />

      {step === 0 && <SpecialLoader nextStep={nextStep} />}
      {step === 1 && <Celebrate nextStep={nextStep} />}
      {step === 2 && <BirthdayMain nextStep={nextStep} />}
      {step === 3 && <Balloons nextStep={nextStep} />}
      {step === 4 && <SpecialMessage nextStep={nextStep} />}
      {step === 5 && <MomentsCarousel nextStep={nextStep} />}
      {step === 6 && <FinalMessage />}
    </div>
  );
}

export default App;