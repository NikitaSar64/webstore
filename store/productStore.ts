import { create } from 'zustand';

export interface Product{
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
    loadBasketFromLocalStorage: (localStoreProduct: Product[]) => void;
    loadFavouritesFromLocalStorage: (localStoreProduct: Product[]) => void;
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
    removeProductFromBasket: (index) => set(state => ({
        basket: [
            ...state.basket.filter((product, i) => i != index)
        ]
    })),
    loadBasketFromLocalStorage: (localStoreProduct) => set(state => ({
        basket: [ ...localStoreProduct ]
    })),
    loadFavouritesFromLocalStorage: (localStoreProduct) => set(state => ({
        favorites: [ ...localStoreProduct ]
    }))
})
)
