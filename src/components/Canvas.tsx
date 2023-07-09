import {
  Canvas as CanvasPrimitive,
  CanvasProps as CanvasPrimitiveProps,
} from "@react-three/fiber";
import { useEffect, useRef } from "react";

export type CanvasProps = CanvasPrimitiveProps;

export const Canvas = (props: CanvasProps) => {
  const ref = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      const query = "#app > div > div";
      const containerEl = document.querySelector(query) as HTMLElement;
      const canvasEl = ref.current as HTMLElement | null;

      if (!canvasEl || !containerEl) {
        return;
      }

      const matrix = window.getComputedStyle(containerEl).transform;
      const array = matrix.replace("matrix(", "").replace(")", "").split(",");
      const scale = 1 / Number(array[0]);

      canvasEl.style.transform = `scale(${scale})`;
    };

    window.addEventListener("resize", handleResize);

    setTimeout(() => {
      handleResize();
    });

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <CanvasPrimitive ref={ref} {...props} />;
};
