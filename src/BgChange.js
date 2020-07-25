import React, { useState } from "react";

const BgChange = () => {
  const purple = "red";
  const [bg, setBg] = useState(purple);
  const [name, setName] = useState("bishu");
  const bgChange = () => {
    let newBg = "blue";
    setBg(newBg);

    let name = "bishwas";
    setName(name);
  };
  const black = "black";
  const don = "hero";
  const bgChange2 = () => {
    setBg(black);
    setName(don);
  };
  return (
    <div style={{ backgroundColor: bg }}>
      <button onClick={bgChange} onDoubleClick={bgChange2}>
        {name}
      </button>
    </div>
  );
};
export default BgChange;
