import Image from "next/image";
import { FC } from "react";

import logo from "@assets/logo/logo.png";
import { LogoProps } from "./Logo.props";
import Link from "next/link";
import ROUTES from "@/routes/routes";

export const Logo: FC<LogoProps> = ({ className }) => {
  return (
    <Link href={ROUTES.main.createRoute()} className={className}>
      <Image alt="logoIcon" src={logo} width={144} height={50} />
    </Link>
  );
};
