export interface Product {
	id: string;
	image: string;
	name: string;
	price: number;
	rating?: string;
	variations?: Array<string>;
	soldCount?: number;
}