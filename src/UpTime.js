import React, { useState } from "react";
import "./UpTime.css";

const UpTime = () => {
  let newTime = new Date().toLocaleTimeString();
  const [chtime, setChtime] = useState(newTime);

  const IncNum3 = () => {
    newTime = new Date().toLocaleTimeString();
    setChtime(newTime);
  };
  setInterval(IncNum3, 1000);

  return (
    <div className="text-center">
      <h1>{chtime}</h1>
    </div>
  );
};

export default UpTime;
