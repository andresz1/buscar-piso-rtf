import clsx from "clsx";
import { ComponentPropsWithoutRef } from "react";

export type LIProps = ComponentPropsWithoutRef<"li">;

export const LI = ({ className, ...others }: LIProps) => {
  return <li className={clsx(className, "my-md")} {...others} />;
};
