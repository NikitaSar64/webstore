import { StaticImageData } from "next/image";

export interface CardProps {
  name: string;
  category: string;
  price: number;
  productImg: StaticImageData;
  authorAvatar: string;
  authorName: string;
  rating: number;
}
