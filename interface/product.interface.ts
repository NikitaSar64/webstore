export interface ProductModel {
	id: string;
    category: string;
	description: string;
    image: string;
    title:string;
	rating: RatingModel;
	price: number;
}

interface RatingModel{
    count: number;
    rate: number;
}
