import clsx from "clsx";
import { ComponentPropsWithoutRef } from "react";

export type CenterProps = ComponentPropsWithoutRef<"div">;

export const Center = ({ className, ...others }: CenterProps) => {
  return (
    <div
      className={clsx(
        className,
        "flex items-center justify-center w-full h-full flex-col"
      )}
      {...others}
    />
  );
};
