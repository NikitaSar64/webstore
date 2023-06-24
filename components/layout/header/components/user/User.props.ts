import { StaticImageData } from "next/image";

export interface UserProps {
  name: string;
  balance?: number;
  img: StaticImageData;
}
