import { OrbitControls, Stars } from "@react-three/drei";
import {
  Canvas,
  CanvasProps,
  GroupProps,
  MeshProps,
  useFrame,
  useLoader,
} from "@react-three/fiber";
import { Suspense, useRef } from "react";
import { Group, Mesh, TextureLoader } from "three";

const Earth = (props: MeshProps) => {
  const ref = useRef<Mesh>(null!);
  const colorMap = useLoader(TextureLoader, "/images/earth.jpeg");

  useFrame((_state, delta) => {
    ref.current.rotation.y += delta;
  });

  return (
    <mesh {...props} ref={ref}>
      <sphereGeometry args={[1, 18, 18]} />
      <meshStandardMaterial map={colorMap} />
    </mesh>
  );
};

const Sun = (props: GroupProps) => {
  const ref = useRef<Group>(null!);

  useFrame((_state, delta) => {
    ref.current.rotation.y += delta * 2;
  });

  return (
    <group ref={ref} {...props}>
      <pointLight position={[0, 0, 10]} />
      <mesh position={[0, 0, 10]}>
        <sphereGeometry args={[0.2, 18, 18]} />
        <meshStandardMaterial color="yellow" />
      </mesh>
    </group>
  );
};

export const LightExample = (props: CanvasProps) => {
  return (
    <Canvas
      resize={{ scroll: false, offsetSize: true }}
      camera={{ position: [0, 0, 3] }}
      {...props}
    >
      <Suspense fallback={null}>
        <color attach="background" args={[0, 0, 0]} />
        <ambientLight />
        <Sun position={[0, 0, 0]} />
        <Earth position={[0, 0, 0]} />
        <OrbitControls />
        <Stars saturation={0} count={400} speed={0.5} />
      </Suspense>
    </Canvas>
  );
};
