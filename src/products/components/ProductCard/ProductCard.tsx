import { Product } from "../../../shared/models/Product";
import "./ProductCard.scss";

interface ProductProps {
	product: Product;
}

export default function ProductCard(props: ProductProps) {
	return (
		<div className="product-card">
			<img className="product-image" src={props.product.image}></img>
			<div className="product-details">
				<div className="product-name">{props.product.name}</div>
				<div className="product-price">${props.product.price}</div>
			</div>
		</div>
	);
}
