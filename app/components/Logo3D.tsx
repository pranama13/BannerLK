"use client";

import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { useRef } from 'react';
import * as THREE from 'three';

function AnimatedLogo() {
    const groupRef = useRef<THREE.Group>(null);

    useFrame((state) => {
        if (groupRef.current) {
            // Slow random rotation on multiple axes
            groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.3;
            groupRef.current.rotation.y = Math.cos(state.clock.elapsedTime * 0.15) * 0.4;
            groupRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.1) * 0.2;
        }
    });

    return (
        <group ref={groupRef} position={[0, 0, 0]}>
            {/* Four black circles/spheres in corners - SMALLER */}
            <mesh position={[-0.5, 0.5, 0]}>
                <sphereGeometry args={[0.4, 32, 32]} />
                <meshStandardMaterial
                    color="#1a1a1a"
                    metalness={0.5}
                    roughness={0.3}
                />
            </mesh>

            <mesh position={[0.5, 0.5, 0]}>
                <sphereGeometry args={[0.4, 32, 32]} />
                <meshStandardMaterial
                    color="#1a1a1a"
                    metalness={0.5}
                    roughness={0.3}
                />
            </mesh>

            <mesh position={[-0.5, -0.5, 0]}>
                <sphereGeometry args={[0.4, 32, 32]} />
                <meshStandardMaterial
                    color="#1a1a1a"
                    metalness={0.5}
                    roughness={0.3}
                />
            </mesh>

            <mesh position={[0.5, -0.5, 0]}>
                <sphereGeometry args={[0.4, 32, 32]} />
                <meshStandardMaterial
                    color="#1a1a1a"
                    metalness={0.5}
                    roughness={0.3}
                />
            </mesh>

            {/* Center orange diamond - SMALLER */}
            <mesh rotation={[0, 0, Math.PI / 4]}>
                <boxGeometry args={[0.5, 0.5, 0.2]} />
                <meshStandardMaterial
                    color="#f59e0b"
                    metalness={0.7}
                    roughness={0.2}
                    emissive="#f59e0b"
                    emissiveIntensity={0.2}
                />
            </mesh>
        </group>
    );
}

export default function Logo3DViewer() {
    return (
        <div className="w-full h-full rounded-lg overflow-hidden">
            <Canvas camera={{ position: [0, 0, 3.5], fov: 50 }}>
                {/* Lighting */}
                <ambientLight intensity={0.7} />
                <directionalLight position={[5, 5, 5]} intensity={0.9} />
                <pointLight position={[-5, -5, 3]} intensity={0.3} color="#f59e0b" />

                {/* Animated Logo */}
                <AnimatedLogo />

                {/* Controls - allow rotation but disable zoom and pan */}
                <OrbitControls
                    enableZoom={false}
                    enablePan={false}
                />
            </Canvas>
        </div>
    );
}
