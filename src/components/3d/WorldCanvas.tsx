import { Canvas } from '@react-three/fiber';
import { Environment, PerspectiveCamera, OrbitControls } from '@react-three/drei';
import { Suspense } from 'react';
import { ExperienceState } from '@/store/useExperienceStore';

export const WorldCanvas = ({ phase }: { phase: ExperienceState }) => {
  if (phase === "LANDING") return null;

  return (
    <Canvas shadows dpr={[1, 2]} gl={{ antialias: true }}>
      <PerspectiveCamera makeDefault position={[0, 1.5, 5]} fov={50} />
      <color attach="background" args={['#050505']} />
      <fog attach="fog" args={['#050505', 10, 50]} />
      <ambientLight intensity={0.4} />
      <directionalLight position={[10, 10, 5]} intensity={1} castShadow />
      <Suspense fallback={null}>
        <Environment preset="city" />
        {(phase === "FACULTY_INTRO" || phase === "FACULTY_SHOWCASE") && (
          <group position={[0, -1.5, 0]}>
            <mesh castShadow receiveShadow>
              <capsuleGeometry args={[0.5, 1.5, 4, 16]} />
              <meshStandardMaterial color="#06b6d4" wireframe />
            </mesh>
          </group>
        )}
        {phase === "DIGITAL_TWIN" && (
          <group>
            <gridHelper args={[50, 50, '#111', '#222']} />
            <OrbitControls target={[0, 1, 0]} maxPolarAngle={Math.PI / 2} />
          </group>
        )}
      </Suspense>
    </Canvas>
  );
};
