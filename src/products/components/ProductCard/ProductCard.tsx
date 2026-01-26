import { Product } from "../../../shared/models/Product";
import "./ProductCard.scss";

interface ProductProps {
	product: Product;
}

const ProductCard = ({product}: ProductProps) => {
	return (
		<div className="product-card" data-testid="ProductCard">
			<img className="product-image" src={product.image ? product.image: 'public/default_image.png'} data-testid="ProductImage"></img>
			<div className="product-details">
				<div className="product-name" data-testid="ProductName">{product.name}</div>
				<div className="product-price" data-testid="ProductPrice">${product.price}</div>
			</div>
		</div>
	);
}

export default ProductCard;