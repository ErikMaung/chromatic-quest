// Correct imports for THREE namespace and React Three Fiber
import * as THREE from 'three';
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

// Type declarations for component props
interface InteractiveModelProps {
  path: string;
}

// InteractiveModel component with proper THREE type usage
const InteractiveModel: React.FC<InteractiveModelProps> = ({ path }) => {
  const gltf = useLoader(GLTFLoader, path);
  const modelRef = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (modelRef.current) {
      modelRef.current.rotation.y += delta * 0.5; // Rotate the model
    }
  });

  return (
    <primitive
      ref={modelRef}
      object={gltf.scene}
      scale={[0.5, 0.5, 0.5]} // Adjust scale as needed
      position={[0, 0, 0]} // Adjust position as needed
    />
  );
};

// Scene component with proper Canvas setup
const Scene: React.FC = () => {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <InteractiveModel path="/models/color-wheel.gltf" />
    </Canvas>
  );
};

export default Scene;