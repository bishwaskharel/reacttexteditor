import React, { useState } from "react";

const UpTime = () => {
    let newTime = new Date().toLocaleTimeString();
    const [chtime, setChtime] = useState(newTime);

    const IncNum3 = () => {
      newTime = new Date().toLocaleTimeString();
      setChtime(newTime);
    };
    setInterval(IncNum3, 1000);

    return(
        
        <div className="text-center">
          <h3>{chtime}</h3>
        </div>

    )
}

export default UpTime;