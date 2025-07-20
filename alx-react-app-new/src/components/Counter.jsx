// src/components/Counter.jsx
import { useState } from 'react'; // Import the useState hook

function Counter() {
  // Initialize state for the count, starting at 0
  const [count, setCount] = useState(0);

  // Function to increment the count
  const increment = () => {
    setCount(count + 1);
  };

  // Function to decrement the count
  const decrement = () => {
    setCount(count - 1);
  };

  // Function to reset the count to 0
  const reset = () => {
    setCount(0);
  };

  return (
    <div style={{
      border: '2px solid #61dafb',
      padding: '20px',
      margin: '20px',
      borderRadius: '10px',
      textAlign: 'center',
      backgroundColor: '#282c34',
      color: 'white'
    }}>
      <h2 style={{ color: '#61dafb' }}>Simple Counter</h2>
      <p style={{ fontSize: '2em', margin: '15px 0' }}>Current Count: {count}</p>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
        <button
          onClick={increment}
          style={{
            padding: '10px 20px',
            fontSize: '1em',
            borderRadius: '5px',
            border: 'none',
            backgroundColor: '#4CAF50',
            color: 'white',
            cursor: 'pointer',
            boxShadow: '0 2px 5px rgba(0,0,0,0.2)'
          }}
        >
          Increment
        </button>
        <button
          onClick={decrement}
          style={{
            padding: '10px 20px',
            fontSize: '1em',
            borderRadius: '5px',
            border: 'none',
            backgroundColor: '#f44336',
            color: 'white',
            cursor: 'pointer',
            boxShadow: '0 2px 5px rgba(0,0,0,0.2)'
          }}
        >
          Decrement
        </button>
        <button
          onClick={reset}
          style={{
            padding: '10px 20px',
            fontSize: '1em',
            borderRadius: '5px',
            border: 'none',
            backgroundColor: '#008CBA',
            color: 'white',
            cursor: 'pointer',
            boxShadow: '0 2px 5px rgba(0,0,0,0.2)'
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default Counter;
