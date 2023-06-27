import { StaticImageData } from "next/image";

interface User {
  name: string;
  balance?: number;
  img?: string;
}

export interface UserProps {
  userData: User;
}
