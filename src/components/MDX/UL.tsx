import clsx from "clsx";
import { ComponentPropsWithoutRef } from "react";

export type ULProps = ComponentPropsWithoutRef<"ul">;

export const UL = ({ className, ...others }: ULProps) => {
  return (
    <ul
      className={clsx(className, "list-disc text-display-2 font-medium ml-xl")}
      {...others}
    />
  );
};
