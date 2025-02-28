// src/components/Scene.tsx

import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import InteractiveModel from './InteractiveModel';

const Scene: React.FC = () => {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <InteractiveModel path="/models/color-wheel.gltf" />
      <OrbitControls />
    </Canvas>
  );
};

export default Scene;