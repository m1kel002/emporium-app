import React, { FC } from 'react';
import './ProductPageCategories.scss';
import CategoryCard from "../CategoryCard/CategoryCard";

interface ProductPageCategoriesProps {}

const categories = [
	{ name: "Supermarket", image: "/product1.jpg" },
	{ name: "Shoes", image: "/default_image.png" },
	{ name: "Laptops & Computers", image: "/default_image.png" },
	{ name: "Home Appliances", image: "/default_image.png" },
	{ name: "Cameras", image: "/default_image.png" },
	{ name: "Health & Personal Care", image: "/default_image.png" },
	{ name: "Home Entertainment", image: "/default_image.png" },
];

const ProductPageCategories: FC<ProductPageCategoriesProps> = () => (
	<div className="ProductPageCategories" data-testid="ProductPageCategories">
		<h4>Categories</h4>
		<div className="CategoriesContainer">
			{categories.map((category, index) => (
				<CategoryCard key={index} category={category}></CategoryCard>
			))}
		</div>
	</div>
);

export default ProductPageCategories;
