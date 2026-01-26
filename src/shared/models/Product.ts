import { ProductVariation } from "./ProductVariation";
import { Review } from "./Review";

export interface Product {
	id: string;
	image: string;
	name: string;
	description?: string;
	price: number;
	rating?: string;
	variations?: Array<ProductVariation>;
	reviews?: Array<Review>;
	soldCount?: number;
	stocks?: number;
}