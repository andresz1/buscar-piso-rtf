import { useEffect } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

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
      </Canvas>
    </>
  );
};
