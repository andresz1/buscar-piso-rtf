import { useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { Canvas } from "./Canvas";

export const Example = () => {
  const gltf = useLoader(GLTFLoader, "/assets/poly2.glb");

  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <pointLight position={[-10, -10, -10]} />
      <primitive object={gltf.scene} />
      <OrbitControls />
    </Canvas>
  );
};
