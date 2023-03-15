import { StateCreator, create } from 'zustand';
import { persist, createJSONStorage  } from 'zustand/middleware';

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
    addProductToBasket: (product: Product) => void;
    addProductToFavorites: (product: Product) => void;
    removeProductFromBasket: (index: number) => void;
}

export const productStore = create<ProductStore>((set) => ({
    basket: !!(localStorage.basket) ? JSON.parse(localStorage.basket) : [],
    favorites: !!(localStorage.favorites) ? JSON.parse(localStorage.favorites) : [],
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
    removeProductFromBasket: (index) => set(state => ({
        basket: [
            ...state.basket.filter((product, i) => i != index)
        ]
    }))
})
)
