import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface BasketCardProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>{
    id: string;
    category: string;
    description: string;
    title: string;
    price: number;
    rating: number;
    image: string;
    index: number;
}