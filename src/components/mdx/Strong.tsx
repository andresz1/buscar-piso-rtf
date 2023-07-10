import clsx from "clsx";
import { HTMLAttributes } from "react";

export interface StrongProps extends HTMLAttributes<HTMLHeadingElement> {}

export const Strong = ({ className, ...others }: StrongProps) => {
  return (
    <strong
      className={clsx(
        className,
        "bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary"
      )}
      {...others}
    />
  );
};
