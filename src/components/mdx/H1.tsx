import clsx from "clsx";
import { ComponentPropsWithoutRef } from "react";

export type H1Props = ComponentPropsWithoutRef<"h1">;

export const H1 = ({ className, ...others }: H1Props) => {
  return (
    <h1
      className={clsx(className, "text-display-1 text-primary my-md")}
      {...others}
    />
  );
};
