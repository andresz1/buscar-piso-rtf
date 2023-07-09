import clsx from "clsx";
import { ComponentPropsWithoutRef } from "react";

export type AnchorProps = ComponentPropsWithoutRef<"a">;

export const Anchor = ({ className, ...others }: AnchorProps) => {
  return (
    <a
      className={clsx(className, "text-primary hover:underline")}
      {...others}
    />
  );
};
