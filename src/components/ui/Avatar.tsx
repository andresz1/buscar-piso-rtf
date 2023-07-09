import { ComponentPropsWithoutRef } from "react";

export interface AvatarProps
  extends Omit<ComponentPropsWithoutRef<"img">, "alt"> {
  name?: string;
}

export const Avatar = ({ name, ...others }: AvatarProps) => {
  return (
    <img className="w-sz-96 h-sz-96 rounded-full" alt={name} {...others} />
  );
};
