import React, { useState } from "react";

const InNum = () => {
  const [count, setCount] = useState(0);

  const IncNum2 = () => {
    setCount(count + 1);
  };

  const [count2, setCount2] = useState(0);
  const upNum = () => {
    let abc = count2 + 1
    setCount2(abc);
    console.log("2")
    console.log("3")
  };

  setTimeout(upNum, 1000);
  setTimeout(console.log("1"),1000)

  return (
    <>
      <div className="text-center">
        <h3>{count}</h3>
        <button type="button" onClick={IncNum2} className="btn btn-success ">
          Increase Number
        </button>
        <h1>{count2}</h1>
      </div>
    </>
  );
};

export default InNum;
