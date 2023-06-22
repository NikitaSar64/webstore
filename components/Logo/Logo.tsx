import Image from "next/image";
import { FC } from "react";

import logo from "@assets/logo/logo.png";

export const Logo: FC = () => {
  return (
    <a>
      <Image alt="logoIcon" src={logo} width={144} height={50} />
    </a>
  );
};
