import { ICard } from "@/components/card/Card.props";

export const getTotalPrice = (products: ICard[]): number => {
  return products.reduce((prev, cur) => prev + cur.price, 0);
};
