import clsx from "clsx";
import { ComponentPropsWithoutRef } from "react";

export type InlineCodeProps = ComponentPropsWithoutRef<"code">;

export const InlineCode = ({ className, ...others }: InlineCodeProps) => {
  return (
    <code
      className={clsx(
        className,
        "bg-secondary/dim-5 text-secondary ps-sm pe-sm font-monospace"
      )}
      {...others}
    />
  );
};
