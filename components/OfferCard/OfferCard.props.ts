import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface OfferCardProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>{
    title: string,
    subtitle: string,
    background: string
}