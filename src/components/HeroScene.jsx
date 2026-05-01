/* eslint-disable react/no-unknown-property, react/prop-types */
import { useMemo, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, Html, OrbitControls, Stars } from '@react-three/drei'
import { useReducedMotion } from 'framer-motion'

const techNodes = [
  { label: 'React', color: '#22d3ee', position: [2.2, 0.8, 0.2] },
  { label: 'Node', color: '#34d399', position: [-2.1, -0.2, 0.5] },
  { label: 'ML', color: '#f472b6', position: [0.5, -1.55, 1] },
  { label: 'Data', color: '#a78bfa', position: [-0.6, 1.75, -0.2] },
]

const OrbitingNodes = ({ reducedMotion }) => {
  const groupRef = useRef()
  const speed = reducedMotion ? 0.04 : 0.22

  useFrame((state) => {
    if (!groupRef.current) return
    groupRef.current.rotation.y = state.clock.elapsedTime * speed
  })

  return (
    <group ref={groupRef}>
      {techNodes.map((node) => (
        <group key={node.label} position={node.position}>
          <mesh>
            <sphereGeometry args={[0.12, 32, 32]} />
            <meshStandardMaterial color={node.color} emissive={node.color} emissiveIntensity={0.75} />
          </mesh>
          <Html distanceFactor={8} center>
            <span className="rounded-full border border-white/15 bg-black/50 px-2 py-1 text-[10px] font-medium text-white shadow-lg backdrop-blur-md">
              {node.label}
            </span>
          </Html>
        </group>
      ))}
    </group>
  )
}

const DataCore = ({ reducedMotion }) => {
  const coreRef = useRef()
  const ringRef = useRef()
  const particles = useMemo(
    () =>
      Array.from({ length: 34 }, (_, index) => {
        const angle = (index / 34) * Math.PI * 2
        const radius = 2 + (index % 5) * 0.18

        return {
          position: [
            Math.cos(angle) * radius,
            Math.sin(index * 1.7) * 0.75,
            Math.sin(angle) * radius,
          ],
          color: index % 3 === 0 ? '#22d3ee' : index % 3 === 1 ? '#34d399' : '#f472b6',
        }
      }),
    []
  )

  useFrame((state) => {
    const time = state.clock.elapsedTime

    if (coreRef.current) {
      coreRef.current.rotation.x = time * (reducedMotion ? 0.04 : 0.18)
      coreRef.current.rotation.y = time * (reducedMotion ? 0.06 : 0.26)
    }

    if (ringRef.current) {
      ringRef.current.rotation.z = time * (reducedMotion ? 0.03 : 0.16)
      ringRef.current.rotation.x = Math.sin(time * 0.4) * 0.22
    }
  })

  return (
    <Float speed={reducedMotion ? 0.45 : 1.6} rotationIntensity={reducedMotion ? 0.15 : 0.65} floatIntensity={reducedMotion ? 0.2 : 0.75}>
      <group>
        <mesh ref={coreRef}>
          <icosahedronGeometry args={[1.05, 1]} />
          <meshStandardMaterial
            color="#67e8f9"
            emissive="#0891b2"
            emissiveIntensity={0.35}
            metalness={0.6}
            roughness={0.18}
            transparent
            opacity={0.82}
          />
        </mesh>
        <mesh ref={ringRef} rotation={[Math.PI / 2.7, 0, 0]}>
          <torusGeometry args={[1.55, 0.015, 16, 120]} />
          <meshStandardMaterial color="#c084fc" emissive="#7e22ce" emissiveIntensity={0.8} />
        </mesh>
        <mesh rotation={[0.6, 0.3, 0.9]}>
          <torusGeometry args={[1.9, 0.012, 16, 120]} />
          <meshStandardMaterial color="#34d399" emissive="#047857" emissiveIntensity={0.65} />
        </mesh>
        {particles.map((particle, index) => (
          <mesh key={index} position={particle.position}>
            <sphereGeometry args={[0.025, 12, 12]} />
            <meshStandardMaterial color={particle.color} emissive={particle.color} emissiveIntensity={1} />
          </mesh>
        ))}
        <OrbitingNodes reducedMotion={reducedMotion} />
      </group>
    </Float>
  )
}

const HeroScene = () => {
  const reducedMotion = useReducedMotion()

  return (
    <div className="relative h-[360px] w-full overflow-hidden rounded-lg border border-white/10 bg-black/25 shadow-2xl shadow-cyan-950/40 backdrop-blur md:h-[460px] lg:h-[540px]">
      <div className="pointer-events-none absolute inset-x-8 top-8 z-10 flex items-center justify-between text-xs uppercase tracking-[0.28em] text-cyan-100/70">
        <span>Code</span>
        <span>AI</span>
        <span>Cloud</span>
      </div>
      <Canvas camera={{ position: [0, 0, 6], fov: 45 }} dpr={[1, 1.7]}>
        <color attach="background" args={['#020617']} />
        <ambientLight intensity={0.65} />
        <pointLight position={[3, 3, 4]} intensity={2.4} color="#22d3ee" />
        <pointLight position={[-3, -2, 3]} intensity={1.4} color="#f472b6" />
        <Stars radius={45} depth={18} count={reducedMotion ? 180 : 420} factor={3} saturation={0} fade speed={reducedMotion ? 0.05 : 0.55} />
        <DataCore reducedMotion={reducedMotion} />
        <OrbitControls enableZoom={false} enablePan={false} autoRotate={!reducedMotion} autoRotateSpeed={0.35} minPolarAngle={Math.PI / 2.8} maxPolarAngle={Math.PI / 1.55} />
      </Canvas>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-slate-950/90 to-transparent" />
    </div>
  )
}

export default HeroScene
