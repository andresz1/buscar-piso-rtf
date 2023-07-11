import { OrbitControls } from "@react-three/drei";
import { Canvas, CanvasProps, MeshProps, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Mesh } from "three";

const Sphere = (props: MeshProps) => {
  const ref = useRef<Mesh>(null!);

  useFrame((_state, delta) => {
    ref.current.rotation.y += delta;
  });

  return (
    <mesh {...props} ref={ref}>
      <sphereGeometry args={[1, 18, 18]} />
      <meshStandardMaterial wireframe wireframeLinewidth={4} color="blue" />
    </mesh>
  );
};

export const VertexExample = (props: CanvasProps) => {
  return (
    <Canvas
      resize={{ scroll: false, offsetSize: true }}
      camera={{ position: [0, 0, 3] }}
      {...props}
    >
      <ambientLight />
      <Sphere position={[0, 0, 0]} />
      <OrbitControls />
    </Canvas>
  );
};
