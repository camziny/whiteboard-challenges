import React, { useState } from "react";

const AddNumbers = () => {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState(null);

  const addNumbers = () => {
    const sum = parseFloat(num1) + parseFloat(num2);
    setResult(sum);
  };

  return (
    <div>
      <input
        type="number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
        placeholder="Enter first number"
      />
      <input
        type="number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
        placeholder="Enter second number"
      />
      <button onClick={addNumbers}>Add</button>
      {result !== null && <h2>Result: {result}</h2>}
    </div>
  );
};

export default AddNumbers;
