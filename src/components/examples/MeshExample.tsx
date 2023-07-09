import { OrbitControls } from "@react-three/drei";
import { Canvas, CanvasProps, MeshProps, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Mesh } from "three";

const Sphere = (props: MeshProps) => {
  const ref = useRef<Mesh>(null!);

  useFrame((state, delta) => {
    ref.current.rotation.x += delta / 2;
  });

  return (
    <mesh {...props} ref={ref}>
      <sphereGeometry args={[1, 18, 18]} />
      <meshStandardMaterial color="blue" />
    </mesh>
  );
};

export const MeshExample = (props: CanvasProps) => {
  return (
    <Canvas resize={{ scroll: false, offsetSize: true }} {...props}>
      <ambientLight />
      <pointLight position={[0, 0, 10]} />
      <Sphere position={[0, 0, 0]} />
      <OrbitControls />
    </Canvas>
  );
};
