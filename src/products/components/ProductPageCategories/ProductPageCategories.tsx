import { useEffect, useState } from "react";
import "./ProductPageCategories.scss";
import CategoryCard from "../CategoryCard/CategoryCard";
import categoriesData from "../../../shared/data/categories.json";
import { Category } from "../../../shared/models/Category";

interface ProductPageCategories {}

export default function ProductPageCategories() {
	const [categories, setCategories] = useState<Array<Category>>();

	useEffect(() => {
		setCategories(categoriesData);
	}, []);

	return (
		<div className="ProductPageCategories" data-testid="ProductPageCategories">
			<h4>Categories</h4>
			<div className="CategoriesContainer">
				{categories?.map((category, index) => (
					<CategoryCard key={index} category={category}></CategoryCard>
				))}
			</div>
		</div>
	);
}
