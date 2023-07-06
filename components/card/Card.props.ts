import { StaticImageData } from "next/image";
import { HTMLAttributes } from "react";

interface ICard {
  id: number;
  name: string;
  category: string;
  description?: string;
  price: number;
  productImg: StaticImageData;
  authorAvatar: string;
  authorName: string;
  rating: number;
  [key: string]: any;
}

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  cardData: ICard;
  type?: "horizontal" | "vertical";
  [key: string]: any;
  ratingShow?: boolean;
}
