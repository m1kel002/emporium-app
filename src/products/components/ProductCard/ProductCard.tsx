import { Product } from "../../../shared/models/Product";
import "./ProductCard.scss";

interface ProductProps {
	product: Product;
}

const ProductCard = ({product}: ProductProps) => {
	return (
		<div className="product-card">
			<img className="product-image" src={product.image ? product.image: 'default.png'}></img>
			<div className="product-details">
				<div className="product-name">{product.name}</div>
				<div className="product-price">${product.price}</div>
			</div>
		</div>
	);
}

export default ProductCard;