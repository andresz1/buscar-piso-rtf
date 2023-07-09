import {
  Canvas as CanvasPrimitive,
  CanvasProps as CanvasPrimitiveProps,
} from "@react-three/fiber";

export type CanvasProps = CanvasPrimitiveProps;

export const Canvas = (props: CanvasProps) => {
  <CanvasPrimitive {...props} />;
};
