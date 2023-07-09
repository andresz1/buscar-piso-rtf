import { useEffect } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader";

/*
function Box(props) {
  // This reference gives us direct access to the THREE.Mesh object
  const ref = useRef();
  // Hold state for hovered and clicked events
  const [hovered, hover] = useState(false);
  const [clicked, click] = useState(false);
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => (ref.current.rotation.x += delta));
  // Return the view, these are regular Threejs elements expressed in JSX
  return (
    <mesh
      {...props}
      ref={ref}
      scale={clicked ? 1.5 : 1}
      onClick={(event) => click(!clicked)}
      onPointerOver={(event) => (event.stopPropagation(), hover(true))}
      onPointerOut={(event) => hover(false)}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? "hotpink" : "orange"} />
    </mesh>
  );
}
*/

const XD = () => {
  useEffect(() => {
    const handleResize = () => {
      const canvas = document.querySelector("#x canvas") as HTMLElement;
      const container = document.querySelector(
        "#app > div > div"
      ) as HTMLElement;

      if (!canvas || !container) {
        return;
      }

      const regExp = /\(([^)]+)\)/;
      const matches = regExp.exec(container.style.transform);
      const scale = 1 / Number(matches ? matches[1] : 1);
      console.log(scale);

      canvas.style.transform = `scale(${scale})`;
    };

    window.addEventListener("resize", handleResize);

    setTimeout(() => {
      handleResize();
    });

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return null;
};

export const Example = () => {
  const gltf = useLoader(GLTFLoader, "/assets/poly2.glb");

  return (
    <>
      <XD />
      <Canvas id="x">
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[-10, -10, -10]} />
        <primitive object={gltf.scene} />
        <OrbitControls />
      </Canvas>
    </>
  );
};
