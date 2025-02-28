// src/pages/Home.tsx
import React, { useState } from 'react';
import ColorWheel from '../components/ColorWheel';
import Scene from '../components/Scene';
import DynamicBackground from '../components/DynamicBackground';

const Home: React.FC = () => {
  const [backgroundColor, setBackgroundColor] = useState('#ffffff');

  const handleColorChange = (color: string) => {
    setBackgroundColor(color);
  };

  return (
    <div>
      <h1>Chromatic Quest: The Interactive Color Theory Adventure</h1>
      <ColorWheel onColorChange={handleColorChange} />
      <Scene />
      <DynamicBackground color={backgroundColor} />
    </div>
  );
};

export default Home;