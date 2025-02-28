// src/components/DynamicBackground.tsx
import React, { useEffect } from 'react';

interface DynamicBackgroundProps {
  color: string;
}

const DynamicBackground: React.FC<DynamicBackgroundProps> = ({ color }) => {
  useEffect(() => {
    document.body.style.backgroundColor = color;
  }, [color]);

  return null;
};

export default DynamicBackground;