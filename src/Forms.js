import React, { useState } from "react";

const Forms = () => {
  const [name, setName] = useState("");
  const [fullName, setFullName] = useState("");

  const inputEvent = (event) => {
    setName(event.target.value);
  };

  const onChange = () => {
    let a = name;
    setFullName(a);
  };
  return (
    <>
      <h1>Hello {fullName}</h1>
      <div style={{ textAlign: "center" }}>
        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={inputEvent}
        />
        <button onClick={onChange}>Sumbit</button>
      </div>
    </>
  );
};

export default Forms;
