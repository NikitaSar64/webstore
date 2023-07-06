import { ICard } from "@/components/card/Card.props";
import { create } from "zustand";

interface BasketStore {
  basket: ICard[];
  addToBakset: (product: ICard) => void;
}

export const useBasketStore = create<BasketStore>()((set) => ({
  basket: [],
  addToBakset: (product) =>
    set((state) => ({ basket: [...state.basket, product] })),
}));
