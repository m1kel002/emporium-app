import './ProductQuantity.scss'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
const ProductQuantity = () => {
    return (
        <div className="product-quantity-container">
            <button className="minus">
                <RemoveIcon></RemoveIcon>
            </button>
            <span className="quantity">12</span>
            <button className="add">
                <AddIcon></AddIcon>
            </button>
        </div>
    );
}

export default ProductQuantity;