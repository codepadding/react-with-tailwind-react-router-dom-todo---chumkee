import React, { useState } from "react";

const TestingPage = () => {

    const [value,setValue] = useState("man");



    const handleChange = (event) => {
        console.log("event",event.target.value);
        setValue(event.target.value)

    }
    
  return (
    <div>
      <input placeholder="write" onChange={handleChange} value={value}/>
      <br/>
      <button>OK</button>
    </div>
  );
};

export default TestingPage;
