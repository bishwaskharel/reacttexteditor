import React, { useState } from "react";

const Forms = () => {
  const [name, setName] = useState("");
  const [fullName, setFullName] = useState("");
  const [password, setPassword] = useState("");
  const inputEvent = (event) => {
    setName(event.target.value);
  };

  const onChange = () => {
    let a = name;
    let b = password;
    let c = a + b;
    setFullName(a);
    setPassword(c);
  };
  return (
    <>
      <h1>Hello {fullName}</h1>
      <div style={{ textAlign: "center" }}>
        <form onClick={onChange}>
          <input
            type="text"
            placeholder="Enter Name"
            value={name}
            onChange={inputEvent}
          />
          <input
            type="password"
            placeholder="Enter Password"
            defaultValue={password}
            onchange={inputEvent}
          />
          <div>
            <button type="submit">Sumbit</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Forms;
