import clsx from "clsx";
import { HTMLAttributes } from "react";

export interface H3Props extends HTMLAttributes<HTMLHeadingElement> {}

export const H3 = ({ className, ...others }: H3Props) => {
  return (
    <h3
      className={clsx(className, "text-display-3 text-primary mb-sm")}
      {...others}
    />
  );
};
