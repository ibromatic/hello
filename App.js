import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  const LIMIT = 10;

  const handleIncrease = () => {
    setCount(prevCount => prevCount + 1);
  };

  const handleDecrease = () => {
    if (count > 0) {
      setCount(prevCount => prevCount - 1);
    }
  };

  return (
    <div>
      <h1>Click Counter</h1>
      <p>Current Count: {count}</p>
      
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleDecrease} disabled={count === 0}>Decrease</button>
      
      {/* Conditional message */}
      {count >= LIMIT && (
        <p style={{ color: 'red', fontWeight: 'bold' }}>
          You've reached the limit!
        </p>
      )}
    </div>
  );
}

export default Counter;
