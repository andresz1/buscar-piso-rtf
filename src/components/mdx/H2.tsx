import clsx from "clsx";
import { ComponentPropsWithoutRef } from "react";

export type H2Props = ComponentPropsWithoutRef<"h2">;

export const H2 = ({ className, ...others }: H2Props) => {
  return <h2 className={clsx(className, "text-display-2 my-md")} {...others} />;
};
