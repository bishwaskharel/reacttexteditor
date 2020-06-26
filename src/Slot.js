import React, { useState } from "react";

const Slot = () => {
  let newTime = new Date().toLocaleTimeString();

  const [ctime, setCtime] = useState(newTime);
  //console.log(state);

  const IncNum = () => {
    newTime = new Date().toLocaleTimeString();
    setCtime(newTime);
    //console.log('clicled' + count++);
  };

  const [count, setCount] = useState(0);

  const IncNum2 = () => {
    setCount(count + 1);
  };

  const [chtime, setChtime] = useState(newTime);

  const IncNum3 = () => {
    newTime = new Date().toLocaleTimeString();
    setChtime(newTime);
  };

  setInterval(IncNum3, 1000);
  return (
    <div>
      <h1>Slot Game</h1>
      <div className="text-center">
        <h3>{ctime}</h3>
        <button type="button" onClick={IncNum} className="btn btn-success ">
          Update Time
        </button>
      </div>
      <br></br>
      <div className="text-center">
        <h3>{count}</h3>
        <button type="button" onClick={IncNum2} className="btn btn-success ">
          Increase Number
        </button>
      </div>
      <br></br>
      <div className="text-center">
        <h3>{chtime}</h3>
      </div>
    </div>
  );
};

export default Slot;
