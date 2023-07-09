import clsx from "clsx";
import { HTMLAttributes } from "react";

export type PProps = HTMLAttributes<HTMLParagraphElement>;

export const P = ({ className, ...others }: PProps) => {
  return <p className={clsx(className, "text-body-1")} {...others} />;
};
