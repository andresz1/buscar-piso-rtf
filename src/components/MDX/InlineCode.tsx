import clsx from "clsx";
import { HTMLAttributes } from "react";

export type InlineCodeProps = HTMLAttributes<HTMLHeadingElement>;

export const InlineCode = ({ className, ...others }: InlineCodeProps) => {
  return (
    <code
      className={clsx(
        className,
        "bg-secondary/dim-5 text-body-2 text-secondary ps-sm pe-sm font-monospace"
      )}
      {...others}
    />
  );
};
