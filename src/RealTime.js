
import React, { useState } from "react";

const RealTime = () => {

  let newTime = new Date().toLocaleTimeString();

  const [ctime, setCtime] = useState(newTime);

  const IncNum = () => {
    newTime = new Date().toLocaleTimeString();
    setCtime(newTime);
   
  };
 return (
 <>
      
      <div className="text-center">
        <h3>{ctime}</h3>
        <button type="button" onClick={IncNum} className="btn btn-success ">
          Update Time
        </button>
        </div>
      </>
      
      );
};
export default RealTime;