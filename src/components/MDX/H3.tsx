import clsx from "clsx";
import { ComponentPropsWithoutRef } from "react";

export type H3Props = ComponentPropsWithoutRef<"h3">;

export const H3 = ({ className, ...others }: H3Props) => {
  return (
    <h3
      className={clsx(className, "text-display-3-expanded mb-sm")}
      {...others}
    />
  );
};
