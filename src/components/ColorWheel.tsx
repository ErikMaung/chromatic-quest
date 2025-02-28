// src/components/ColorWheel.tsx
import React, { useState } from 'react';
import Wheel from '@uiw/react-color-wheel';
import { hsvaToHex } from '@uiw/color-convert';

interface ColorWheelProps {
  onColorChange: (color: string) => void;
}

const ColorWheel: React.FC<ColorWheelProps> = ({ onColorChange }) => {
  const [hsva, setHsva] = useState({ h: 0, s: 0, v: 100, a: 1 });

  const handleColorChange = (color: any) => {
    setHsva({ ...hsva, ...color.hsva });
    onColorChange(hsvaToHex(color.hsva));
  };

  return (
    <Wheel
      color={hsva}
      onChange={handleColorChange}
    />
  );
};

export default ColorWheel;