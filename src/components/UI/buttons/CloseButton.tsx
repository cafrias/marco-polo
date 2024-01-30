import React, { ButtonHTMLAttributes } from "react";
import xIcon from "@/assets/icons/x-mark.svg";
import Image from "next/image";
import classNames from "classnames";

type CloseButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export function CloseButton({
  className: outerClassName,
  ...otherAttrs
}: CloseButtonProps) {
  const className = classNames("btn btn-ghost btn-square", outerClassName);

  return (
    <button className={className} {...otherAttrs}>
      <Image src={xIcon} width={24} height={24} alt="" />
    </button>
  );
}
