// src/pages/Home.tsx
import React, { useState } from 'react';
import ColorWheel from '../components/ColorWheel';
import Scene from '../components/Scene';
import DynamicBackground from '../components/DynamicBackground';

const Home: React.FC = () => {
  const [backgroundColor, setBackgroundColor] = useState('#ef135f20');

  const handleColorChange = (color: string) => {
    setBackgroundColor(color + '20');
  };

  return (
    <div>
      <h1>Nothing here yet, development in progress.</h1>
      <ColorWheel onColorChange={handleColorChange} />
      <Scene />
      <DynamicBackground color={backgroundColor} />
    </div>
  );
};

export default Home;