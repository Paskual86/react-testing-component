import React, { useState } from 'react';

const StateComponent = () => {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <h1>Component Test 1</h1>
      <div>
        <p>{`Counter:${counter}`}</p>
        <button onClick={() => setCounter((prev) => prev + 1)}>Action</button>
      </div>
    </div>
  );
};

export default StateComponent;
