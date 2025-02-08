import productData from "../../../shared/mocks/products.json";
import "./ProductPage.scss";
import ProductCard from "../../components/ProductCard/ProductCard";
import { useState } from "preact/hooks";
import { Product } from "../../../shared/models/Product";

export default function ProductPage() {
	const [data, setData] = useState<Array<Product>>();
	setData(productData);

	return (
		<div className="products-container">
			{data?.map((product, index) => (
				<ProductCard key={index} product={product}></ProductCard>
			))}
		</div>
	);
}
