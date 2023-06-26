import { StaticImageData } from "next/image";

export interface UserProps {
  userData: {
    name: string;
    balance?: number;
    img?: string;
  };
}
