import { OrbitControls } from "@react-three/drei";
import {
  Canvas,
  CanvasProps,
  MeshProps,
  useFrame,
  useLoader,
} from "@react-three/fiber";
import { Suspense, useRef } from "react";
import { Mesh, TextureLoader } from "three";

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

export const MaterialExample = (props: CanvasProps) => {
  return (
    <Canvas
      resize={{ scroll: false, offsetSize: true }}
      camera={{ position: [0, 0, 3] }}
      {...props}
    >
      <Suspense fallback={null}>
        <ambientLight />
        <pointLight position={[0, 0, 10]} />
        <Earth position={[0, 0, 0]} />
        <OrbitControls />
      </Suspense>
    </Canvas>
  );
};
