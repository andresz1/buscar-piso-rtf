import clsx from "clsx";
import { HTMLAttributes } from "react";

export interface H1Props extends HTMLAttributes<HTMLHeadingElement> {}

export const H1 = ({ className, ...others }: H1Props) => {
  return (
    <h1
      className={clsx(className, "text-display-1 text-primary mb-lg")}
      {...others}
    />
  );
};
