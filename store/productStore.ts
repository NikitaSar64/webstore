import { create } from 'zustand';

interface Product{
    id: string;
    category: string;
	description: string;
    image: string;
    title:string;
	rating: number;
	price: number;
}

interface ProductStore{
    basket: Product[];
    favorites: Product[];
    addProductToBasket: (product: Product) => void
    addProductToFavorites: (product: Product) => void
}

export const productStore = create<ProductStore>((set) => ({
    basket: [],
    favorites: [],
    addProductToBasket: (newproduct) => set(state => ({ 
        basket: [
            ...state.basket,
            newproduct
        ]
    })),
    addProductToFavorites: (newproduct) => set(state => ({ 
        favorites: [
            ...state.favorites,
            newproduct
        ]
    })),
  }))