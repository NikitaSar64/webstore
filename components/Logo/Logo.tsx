import Image from "next/image";
import { FC, HTMLAttributes } from "react";

import logo from "@assets/logo/logo.png";
import { LogoProps } from "./Logo.props";

export const Logo: FC<LogoProps> = ({ className }) => {
  return (
    <a className={className}>
      <Image alt="logoIcon" src={logo} width={144} height={50} />
    </a>
  );
};
