import React, { useRef, useState, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Text, OrbitControls, PerspectiveCamera, Environment } from '@react-three/drei';
import { Vector3, Euler } from 'three';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { motion } from 'framer-motion';

interface CardData {
  id: string;
  title: string;
  subtitle: string;
  image?: string;
  description: string;
  color: string;
}

interface Card3DProps {
  data: CardData;
  position: Vector3;
  rotation: Euler;
  onClick: () => void;
  isActive: boolean;
}

const Card3D: React.FC<Card3DProps> = ({ data, position, rotation, onClick, isActive }) => {
  const meshRef = useRef<any>();
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (meshRef.current) {
      // Continuous rotation around Y-axis
      meshRef.current.rotation.y += 0.01;
      
      // Hover scaling
      const targetScale = hovered ? 1.1 : 1;
      meshRef.current.scale.lerp({ x: targetScale, y: targetScale, z: targetScale }, 0.1);
      
      // Floating animation
      meshRef.current.position.y = position.y + Math.sin(state.clock.elapsedTime * 2 + position.x) * 0.1;
    }
  });

  return (
    <group
      ref={meshRef}
      position={position}
      rotation={rotation}
      onClick={onClick}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      {/* Card Base */}
      <mesh castShadow receiveShadow>
        <boxGeometry args={[2, 2.8, 0.1]} />
        <meshStandardMaterial 
          color={data.color}
          metalness={0.1}
          roughness={0.2}
          emissive={hovered ? '#111111' : '#000000'}
        />
      </mesh>
      
      {/* Card Content Background */}
      <mesh position={[0, 0, 0.06]}>
        <boxGeometry args={[1.8, 2.6, 0.02]} />
        <meshStandardMaterial 
          color="#ffffff"
          metalness={0}
          roughness={0.1}
        />
      </mesh>
      
      {/* Title Text */}
      <Text
        position={[0, 0.8, 0.08]}
        fontSize={0.15}
        color="#000000"
        anchorX="center"
        anchorY="middle"
        maxWidth={1.6}
        font="/fonts/inter-bold.woff"
      >
        {data.title}
      </Text>
      
      {/* Subtitle Text */}
      <Text
        position={[0, 0.5, 0.08]}
        fontSize={0.1}
        color="#666666"
        anchorX="center"
        anchorY="middle"
        maxWidth={1.6}
        font="/fonts/inter-regular.woff"
      >
        {data.subtitle}
      </Text>
      
      {/* Decorative Elements */}
      <mesh position={[0, -0.2, 0.08]}>
        <cylinderGeometry args={[0.6, 0.6, 0.01, 32]} />
        <meshStandardMaterial 
          color={data.color}
          transparent
          opacity={0.3}
        />
      </mesh>
      
      {/* Glow Effect */}
      {hovered && (
        <mesh position={[0, 0, -0.05]}>
          <boxGeometry args={[2.2, 3, 0.05]} />
          <meshStandardMaterial 
            color={data.color}
            transparent
            opacity={0.3}
            emissive={data.color}
            emissiveIntensity={0.2}
          />
        </mesh>
      )}
    </group>
  );
};

const CarouselScene: React.FC<{ cards: CardData[]; onCardClick: (card: CardData) => void }> = ({ cards, onCardClick }) => {
  const groupRef = useRef<any>();
  const { camera } = useThree();
  
  useFrame((state) => {
    if (groupRef.current) {
      // Continuous rotation
      groupRef.current.rotation.y += 0.005;
    }
  });

  const cardPositions = useMemo(() => {
    const radius = 4;
    return cards.map((_, index) => {
      const angle = (index / cards.length) * Math.PI * 2;
      return new Vector3(
        Math.cos(angle) * radius,
        0,
        Math.sin(angle) * radius
      );
    });
  }, [cards.length]);

  const cardRotations = useMemo(() => {
    return cards.map((_, index) => {
      const angle = (index / cards.length) * Math.PI * 2;
      return new Euler(0, -angle, 0);
    });
  }, [cards.length]);

  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 2, 8]} fov={60} />
      <OrbitControls 
        enablePan={false} 
        enableZoom={false}
        enableRotate={true}
        autoRotate={true}
        autoRotateSpeed={1}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 3}
      />
      
      <ambientLight intensity={0.4} />
      <directionalLight 
        position={[10, 10, 5]} 
        intensity={1} 
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />
      <pointLight position={[0, 5, 0]} intensity={0.5} color="#ffffff" />
      
      <Environment preset="studio" />
      
      <group ref={groupRef}>
        {cards.map((card, index) => (
          <Card3D
            key={card.id}
            data={card}
            position={cardPositions[index]}
            rotation={cardRotations[index]}
            onClick={() => onCardClick(card)}
            isActive={false}
          />
        ))}
      </group>
      
      {/* Futuristic Grid Floor */}
      <mesh position={[0, -2, 0]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <planeGeometry args={[20, 20]} />
        <meshStandardMaterial 
          color="#0a0a0a"
          transparent
          opacity={0.5}
          wireframe={true}
        />
      </mesh>
    </>
  );
};

const Card3DCarousel: React.FC = () => {
  const [selectedCard, setSelectedCard] = useState<CardData | null>(null);

  const cardData: CardData[] = [
    {
      id: '1',
      title: 'Innovation',
      subtitle: 'Future Tech',
      description: 'Cutting-edge technology solutions for tomorrow\'s challenges.',
      color: '#6366f1'
    },
    {
      id: '2',
      title: 'Design',
      subtitle: 'Creative Vision',
      description: 'Beautiful interfaces that inspire and engage users.',
      color: '#8b5cf6'
    },
    {
      id: '3',
      title: 'Development',
      subtitle: 'Code Excellence',
      description: 'Robust, scalable solutions built with precision.',
      color: '#06b6d4'
    },
    {
      id: '4',
      title: 'Strategy',
      subtitle: 'Smart Decisions',
      description: 'Data-driven approaches to business growth.',
      color: '#10b981'
    },
    {
      id: '5',
      title: 'Analytics',
      subtitle: 'Data Insights',
      description: 'Transform raw data into actionable intelligence.',
      color: '#f59e0b'
    },
    {
      id: '6',
      title: 'Security',
      subtitle: 'Trust & Safety',
      description: 'Comprehensive protection for digital assets.',
      color: '#ef4444'
    },
    {
      id: '7',
      title: 'Performance',
      subtitle: 'Speed & Scale',
      description: 'Optimized solutions that deliver exceptional results.',
      color: '#ec4899'
    },
    {
      id: '8',
      title: 'Support',
      subtitle: '24/7 Service',
      description: 'Dedicated assistance whenever you need it.',
      color: '#14b8a6'
    }
  ];

  return (
    <div className="w-full h-screen relative bg-gradient-to-br from-background via-background/95 to-primary/5">
      {/* 3D Canvas */}
      <Canvas
        shadows
        className="w-full h-full"
        gl={{ 
          antialias: true, 
          alpha: true,
          powerPreference: "high-performance"
        }}
      >
        <CarouselScene cards={cardData} onCardClick={setSelectedCard} />
      </Canvas>
      
      {/* Overlay Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Scan Lines Effect */}
        <div className="absolute inset-0 opacity-10">
          {Array.from({ length: 20 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-full h-px bg-primary"
              style={{ top: `${i * 5}%` }}
              animate={{
                opacity: [0.1, 0.3, 0.1],
                scaleX: [0.8, 1, 0.8]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.1
              }}
            />
          ))}
        </div>
        
        {/* Corner Decorations */}
        <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-primary/50" />
        <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-primary/50" />
        <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-primary/50" />
        <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-primary/50" />
      </div>
      
      {/* Instructions */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center pointer-events-none"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
      >
        <p className="text-sm text-muted-foreground mb-2">
          Drag to rotate • Click cards for details
        </p>
        <div className="flex justify-center space-x-2">
          {Array.from({ length: 3 }).map((_, i) => (
            <motion.div
              key={i}
              className="w-2 h-2 bg-primary rounded-full"
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: i * 0.2
              }}
            />
          ))}
        </div>
      </motion.div>

      {/* Modal */}
      <Dialog open={!!selectedCard} onOpenChange={() => setSelectedCard(null)}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold" style={{ color: selectedCard?.color }}>
              {selectedCard?.title}
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <p className="text-lg text-muted-foreground">{selectedCard?.subtitle}</p>
            <p className="text-base leading-relaxed">{selectedCard?.description}</p>
            <div 
              className="w-full h-2 rounded-full"
              style={{ backgroundColor: selectedCard?.color }}
            />
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Card3DCarousel;