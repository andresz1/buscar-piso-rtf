import clsx from "clsx";
import { HTMLAttributes } from "react";

export interface H2Props extends HTMLAttributes<HTMLHeadingElement> {}

export const H2 = ({ className, ...others }: H2Props) => {
  return (
    <h2
      className={clsx(className, "text-display-2 text-primary")}
      {...others}
    />
  );
};
