import { StaticImageData } from "next/image";

type basketProduct = {
  id: number;
  name: string;
  category: string;
  price: number;
  productImg: StaticImageData;
};

export interface BasketItemProps {
  item: basketProduct;
}
