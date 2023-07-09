import { ComponentPropsWithoutRef } from "react";
import { Avatar } from "./Avatar";
import clsx from "clsx";

export interface PersonalCardProps extends ComponentPropsWithoutRef<"article"> {
  name: string;
  role: string;
  src: string;
}

export const PersonalCard = ({
  name,
  role,
  src,
  className,
  ...others
}: PersonalCardProps) => {
  return (
    <article className={clsx(className, "flex gap-lg")} {...others}>
      <Avatar name={name} src={src} />

      <div className="flex flex-col justify-center gap-xs">
        <h2 className="text-headline-2">{name}</h2>
        <p>{role}</p>
      </div>
    </article>
  );
};
