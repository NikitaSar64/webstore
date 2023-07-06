import { StaticImageData } from "next/image";
import { HTMLAttributes } from "react";

export interface TutorialItemProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  src: StaticImageData;
}
