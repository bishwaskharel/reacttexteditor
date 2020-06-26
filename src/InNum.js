import React, { useState } from "react";

const InNum = () => {

  const [count, setCount] = useState(0);

  const IncNum2 = () => {
    setCount(count + 1);
  };

  return(
      <>
    <div className="text-center">
    <h3>{count}</h3>
    <button type="button" onClick={IncNum2} className="btn btn-success ">
      Increase Number
    </button>
  </div>
  </>
  )
  }

  export default InNum;
  