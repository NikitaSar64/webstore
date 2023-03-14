import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface CardProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>{
    category: string;
    title: string;
    price: number;
    rating: number;
    image: string;
    children: ReactNode;
}