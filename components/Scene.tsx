"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Sphere, Torus } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function FloatingShape() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      const t = state.clock.getElapsedTime();
      meshRef.current.rotation.x = t * 0.2;
      meshRef.current.rotation.y = t * 0.3;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <Torus ref={meshRef} args={[1, 0.3, 16, 100]} position={[0, 0, 0]}>
        <MeshDistortMaterial
          color="#3b82f6"
          attach="material"
          distort={0.3}
          speed={2}
          roughness={0.2}
          metalness={0.8}
        />
      </Torus>
    </Float>
  );
}

function BackgroundSpheres() {
    return (
        <>
            <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1} position={[-2, 1, -2]}>
                <Sphere args={[0.5, 32, 32]}>
                     <meshStandardMaterial color="#8b5cf6" roughness={0.1} metalness={0.5} transparent opacity={0.6} />
                </Sphere>
            </Float>
             <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1} position={[2, -1, -2]}>
                <Sphere args={[0.4, 32, 32]}>
                     <meshStandardMaterial color="#06b6d4" roughness={0.1} metalness={0.5} transparent opacity={0.6} />
                </Sphere>
            </Float>
        </>
    )
}

export default function Scene() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <pointLight position={[-10, -10, -10]} color="white" intensity={0.5} />
        <FloatingShape />
        <BackgroundSpheres />
      </Canvas>
    </div>
  );
}
