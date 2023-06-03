import { StaticImageData } from "next/image";

export interface CardProps{
    name: string;
    category: string;
    price: number;
    productImg: StaticImageData;
    authorImg: StaticImageData;

}