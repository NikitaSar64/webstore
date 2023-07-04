import { StaticImageData } from "next/image";
import { HTMLAttributes } from "react";

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  name: string;
  category: string;
  description?: string;
  price: number;
  productImg: StaticImageData;
  authorAvatar: string;
  authorName: string;
  rating: number;
  type?: "horizontal" | "vertical" | "mini";
  [key: string]: any;
}
