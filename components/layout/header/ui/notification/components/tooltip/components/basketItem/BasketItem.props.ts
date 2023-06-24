import { StaticImageData } from "next/image";

export interface BasketItemProps {
  name: string;
  category: string;
  price: number;
  img: StaticImageData;
}
