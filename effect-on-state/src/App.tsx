import React, { useEffect, useState } from 'react';

const App: React.FC = () => {
  // Task 1: Message Logger
  const [message, setMessage] = useState<string>('');

  useEffect(() => {
    if (message) {
      console.log('Message changed:', message);
    }
  }, [message]);

  // Task 2: Like Counter
  const [likes, setLikes] = useState<number>(0);

  useEffect(() => {
    if (likes > 0) {
      alert(`Likes updated to ${likes}!`);
    }
  }, [likes]);

  // Task 3: Color Box
  const [color, setColor] = useState<'red' | 'blue'>('red');

  useEffect(() => {
    console.log(`Color is now: ${color}`);
  }, [color]);

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '2rem' }}>
      <h2>Message Logger</h2>
      <button onClick={() => setMessage('Hello from React!')}>
        Send Message
      </button>

      <h2>Like Counter</h2>
      <button onClick={() => setLikes((prev) => prev + 1)}>Like</button>

      <h2>Color Box</h2>
      <button
        onClick={() => setColor((prev) => (prev === 'red' ? 'blue' : 'red'))}
      >
        Change Color
      </button>
      <div
        style={{
          width: 100,
          height: 100,
          marginTop: '1rem',
          backgroundColor: color,
          color: 'white',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {color.toUpperCase()}
      </div>
    </div>
  );
};

export default App;
