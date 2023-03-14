import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface CardProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>{
    id: string;
    category: string;
    description: string;
    title: string;
    price: number;
    rating: number;
    image: string;
    children: ReactNode;
}