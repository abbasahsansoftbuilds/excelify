import React, { useRef, useState, useEffect, Suspense } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Text, Box, Plane, MeshDistortMaterial, Float, Stars } from '@react-three/drei';
import { motion } from 'framer-motion';
import * as THREE from 'three';

// 3D Building Floor Component
const BuildingFloor = ({ 
  position, 
  size, 
  delay, 
  onComplete, 
  floorNumber, 
  isFoundation = false 
}: {
  position: [number, number, number];
  size: [number, number, number];
  delay: number;
  onComplete?: () => void;
  floorNumber: number;
  isFoundation?: boolean;
}) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [animationPhase, setAnimationPhase] = useState(0); // 0: hidden, 1: rising, 2: complete

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
      setAnimationPhase(1);
    }, delay);

    const completeTimer = setTimeout(() => {
      setAnimationPhase(2);
      onComplete?.();
    }, delay + 1500);

    return () => {
      clearTimeout(timer);
      clearTimeout(completeTimer);
    };
  }, [delay, onComplete]);

  useFrame((state) => {
    if (meshRef.current && isVisible) {
      const time = state.clock.getElapsedTime();
      
      // Rising animation
      if (animationPhase === 1) {
        const progress = Math.min((time - delay / 1000) / 1.5, 1);
        const easeProgress = 1 - Math.pow(1 - progress, 3); // ease-out cubic
        
        meshRef.current.position.y = position[1] - 5 + (5 * easeProgress);
        meshRef.current.scale.setScalar(0.8 + (0.2 * easeProgress));
      }
      
      // Completion glow effect
      if (animationPhase === 2) {
        const glowIntensity = 0.5 + 0.5 * Math.sin(time * 2);
        if (meshRef.current.material instanceof THREE.Material) {
          (meshRef.current.material as any).emissive?.setScalar(glowIntensity * 0.1);
        }
      }
    }
  });

  const floorColor = isFoundation 
    ? new THREE.Color(0x2d3748) 
    : new THREE.Color(0x4a5568).lerp(new THREE.Color(0x00d9ff), floorNumber * 0.1);

  return (
    <group>
      {/* Main floor structure */}
      <Box
        ref={meshRef}
        position={[position[0], position[1] - 5, position[2]]}
        args={size}
        visible={isVisible}
      >
        <meshStandardMaterial
          color={floorColor}
          metalness={0.8}
          roughness={0.2}
          transparent
          opacity={0.9}
          emissive={new THREE.Color(0x00d9ff)}
          emissiveIntensity={animationPhase === 2 ? 0.1 : 0}
        />
      </Box>

      {/* Windows */}
      {!isFoundation && Array.from({ length: 8 }).map((_, i) => (
        <Box
          key={`window-${i}`}
          position={[
            position[0] - size[0]/2 + 0.1 + (i % 4) * (size[0]/4),
            position[1] - 5 + (Math.floor(i/4)) * (size[1]/3),
            position[2] + size[2]/2 + 0.02
          ]}
          args={[0.3, 0.4, 0.02]}
          visible={isVisible && animationPhase >= 1}
        >
          <meshStandardMaterial
            color={new THREE.Color(0x00d9ff)}
            emissive={new THREE.Color(0x00d9ff)}
            emissiveIntensity={0.3}
            transparent
            opacity={0.8}
          />
        </Box>
      ))}

      {/* Steel frame outlines */}
      <Box
        position={[position[0], position[1] - 5, position[2]]}
        args={[size[0] + 0.02, size[1] + 0.02, size[2] + 0.02]}
        visible={isVisible && animationPhase >= 1}
      >
        <meshStandardMaterial
          color={new THREE.Color(0x718096)}
          wireframe
          transparent
          opacity={0.4}
        />
      </Box>
    </group>
  );
};

// Particle system for construction effects
const ConstructionParticles = ({ active }: { active: boolean }) => {
  const particlesRef = useRef<THREE.Points>(null);
  const particleCount = 100;

  useFrame((state) => {
    if (particlesRef.current && active) {
      const time = state.clock.getElapsedTime();
      const positions = particlesRef.current.geometry.attributes.position.array as Float32Array;
      
      for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3;
        positions[i3 + 1] += 0.02; // Move up
        
        if (positions[i3 + 1] > 8) {
          positions[i3] = (Math.random() - 0.5) * 10;
          positions[i3 + 1] = -5;
          positions[i3 + 2] = (Math.random() - 0.5) * 10;
        }
      }
      
      particlesRef.current.geometry.attributes.position.needsUpdate = true;
      particlesRef.current.rotation.y = time * 0.1;
    }
  });

  const particles = React.useMemo(() => {
    const positions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 1] = Math.random() * 8 - 5;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    return positions;
  }, []);

  return (
    <points ref={particlesRef} visible={active}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particleCount}
          array={particles}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        color={0x00d9ff}
        size={0.05}
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
};

// Background city skyline
const CitySkyline = () => {
  return (
    <group position={[0, -8, -15]}>
      {Array.from({ length: 20 }).map((_, i) => (
        <Box
          key={i}
          position={[(i - 10) * 2, Math.random() * 4, Math.random() * -5]}
          args={[0.8, Math.random() * 8 + 2, 0.8]}
        >
          <meshStandardMaterial
            color={new THREE.Color(0x1a202c)}
            transparent
            opacity={0.3}
          />
        </Box>
      ))}
    </group>
  );
};

// Main 3D Building Scene
const Building3DScene = ({ onBuildingComplete }: { onBuildingComplete: () => void }) => {
  const [currentFloor, setCurrentFloor] = useState(-1);
  const [constructionComplete, setConstructionComplete] = useState(false);

  const floors = [
    { position: [0, -3, 0] as [number, number, number], size: [4, 1, 3] as [number, number, number], isFoundation: true },
    { position: [0, -2, 0] as [number, number, number], size: [3.5, 1.2, 2.8] as [number, number, number] },
    { position: [0, -0.5, 0] as [number, number, number], size: [3, 1.2, 2.5] as [number, number, number] },
    { position: [0, 1, 0] as [number, number, number], size: [2.5, 1.2, 2.2] as [number, number, number] },
    { position: [0, 2.5, 0] as [number, number, number], size: [2, 1, 2] as [number, number, number] },
  ];

  const handleFloorComplete = (floorIndex: number) => {
    if (floorIndex === floors.length - 1) {
      setConstructionComplete(true);
      setTimeout(() => {
        onBuildingComplete();
      }, 1000);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFloor(prev => {
        if (prev < floors.length - 1) {
          return prev + 1;
        }
        clearInterval(interval);
        return prev;
      });
    }, 800);

    return () => clearInterval(interval);
  }, [floors.length]);

  return (
    <>
      {/* Lighting */}
      <ambientLight intensity={0.4} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <pointLight position={[0, 5, 5]} intensity={0.8} color={0x00d9ff} />
      
      {/* Background */}
      <Stars radius={300} depth={50} count={1000} factor={4} fade />
      <CitySkyline />
      
      {/* Building floors */}
      {floors.map((floor, index) => (
        <BuildingFloor
          key={index}
          position={floor.position}
          size={floor.size}
          delay={index * 800}
          floorNumber={index}
          isFoundation={floor.isFoundation}
          onComplete={() => handleFloorComplete(index)}
        />
      ))}
      
      {/* Construction particles */}
      <ConstructionParticles active={!constructionComplete} />
      
      {/* Completion light beam */}
      {constructionComplete && (
        <Float speed={2} rotationIntensity={0.2}>
          <Box position={[0, 5, 0]} args={[0.1, 10, 0.1]}>
            <meshStandardMaterial
              color={0x00d9ff}
              emissive={0x00d9ff}
              emissiveIntensity={1}
              transparent
              opacity={0.8}
            />
          </Box>
        </Float>
      )}
    </>
  );
};

// Main component
const BuildingConstruction = ({ onComplete }: { onComplete: () => void }) => {
  return (
    <div className="w-full h-full">
      <Canvas
        camera={{ position: [8, 2, 8], fov: 60 }}
        gl={{ antialias: true, alpha: true }}
        className="bg-transparent"
      >
        <Suspense fallback={null}>
          <Building3DScene onBuildingComplete={onComplete} />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default BuildingConstruction;
