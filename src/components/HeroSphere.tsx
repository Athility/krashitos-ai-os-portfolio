"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Sphere, Icosahedron, MeshDistortMaterial, Float } from "@react-three/drei";
import * as THREE from "three";
import { motion } from "framer-motion";

function Core() {
    const coreRef = useRef<THREE.Mesh>(null);
    const outerRef = useRef<THREE.Mesh>(null);
    const wireframeRef = useRef<THREE.Mesh>(null);

    // Mouse interaction
    const mouse = useRef({ x: 0, y: 0 });

    useFrame((state, delta) => {
        if (!coreRef.current || !outerRef.current || !wireframeRef.current) return;

        // Base rotation
        coreRef.current.rotation.y += delta * 0.2;
        coreRef.current.rotation.x += delta * 0.1;

        outerRef.current.rotation.y -= delta * 0.15;
        outerRef.current.rotation.z += delta * 0.05;

        wireframeRef.current.rotation.x += delta * 0.1;
        wireframeRef.current.rotation.y -= delta * 0.2;

        // Mouse interaction (smooth follow)
        // Convert mouse to normalized device coordinates (-1 to +1)
        const targetX = (state.pointer.x * Math.PI) / 4;
        const targetY = (state.pointer.y * Math.PI) / 4;

        coreRef.current.rotation.x = THREE.MathUtils.lerp(coreRef.current.rotation.x, targetY, 0.1);
        coreRef.current.rotation.y = THREE.MathUtils.lerp(coreRef.current.rotation.y, targetX, 0.1);
    });

    return (
        <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
            {/* Inner dense core */}
            <Sphere ref={coreRef} args={[1.2, 64, 64]}>
                <MeshDistortMaterial
                    color="#00f0ff"
                    emissive="#00f0ff"
                    emissiveIntensity={2}
                    toneMapped={false}
                    distort={0.4}
                    speed={3}
                    roughness={0.2}
                    metalness={0.8}
                />
            </Sphere>

            {/* Middle glowing layer */}
            <Icosahedron ref={outerRef} args={[1.6, 1]}>
                <meshStandardMaterial
                    color="#00f0ff"
                    emissive="#00a3ff"
                    emissiveIntensity={1}
                    wireframe
                    transparent
                    opacity={0.3}
                />
            </Icosahedron>

            {/* Outer wireframe shell */}
            <Icosahedron ref={wireframeRef} args={[2.2, 0]}>
                <meshStandardMaterial
                    color="#b026ff"
                    emissive="#b026ff"
                    emissiveIntensity={1.5}
                    wireframe
                    transparent
                    opacity={0.4}
                />
            </Icosahedron>

            {/* Particle field / dust around core */}
            <Particles count={100} />
        </Float>
    );
}

function Particles({ count }: { count: number }) {
    const pointsRef = useRef<THREE.Points>(null);

    const particlesPosition = useMemo(() => {
        const positions = new Float32Array(count * 3);
        const radius = 3;
        for (let i = 0; i < count; i++) {
            const u = Math.random();
            const v = Math.random();
            const theta = u * 2.0 * Math.PI;
            const phi = Math.acos(2.0 * v - 1.0);
            const r = Math.cbrt(Math.random()) * radius + 1.5;

            const sinTheta = Math.sin(theta);
            const cosTheta = Math.cos(theta);
            const sinPhi = Math.sin(phi);
            const cosPhi = Math.cos(phi);

            positions[i * 3] = r * sinPhi * cosTheta;
            positions[i * 3 + 1] = r * sinPhi * sinTheta;
            positions[i * 3 + 2] = r * cosPhi;
        }
        return positions;
    }, [count]);

    useFrame((state, delta) => {
        if (pointsRef.current) {
            pointsRef.current.rotation.y += delta * 0.05;
        }
    });

    return (
        <points ref={pointsRef}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    count={particlesPosition.length / 3}
                    array={particlesPosition}
                    itemSize={3}
                    args={[particlesPosition, 3]}
                />
            </bufferGeometry>
            <pointsMaterial
                size={0.03}
                color="#00f0ff"
                transparent
                opacity={0.6}
                blending={THREE.AdditiveBlending}
                depthWrite={false}
            />
        </points>
    );
}

export function HeroSphere({ scale = 1, opacity = 1 }: { scale?: number; opacity?: number }) {
    return (
        <motion.div
            style={{ scale, opacity }}
            className="relative w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] md:w-[600px] md:h-[600px] flex items-center justify-center pointer-events-auto"
        >
            <Canvas
                camera={{ position: [0, 0, 6], fov: 45 }}
                dpr={[1, 2]}
                gl={{ alpha: true, antialias: true, powerPreference: "high-performance" }}
            >
                {/* Lighting */}
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={1} color="#00f0ff" />
                <pointLight position={[-10, -10, -10]} intensity={0.5} color="#b026ff" />

                <Core />
            </Canvas>

            {/* CSS Outer Glow Fallback (behind canvas) */}
            <div className="absolute inset-0 rounded-full bg-primary/20 blur-[80px] -z-10 animate-pulse-slow mix-blend-screen pointer-events-none" />
        </motion.div>
    );
}
