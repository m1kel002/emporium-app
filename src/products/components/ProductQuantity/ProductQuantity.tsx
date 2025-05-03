import "./ProductQuantity.scss";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

interface QuantityProps {
  quantity: number;
  setQuantity: React.Dispatch<React.SetStateAction<number>>;
}

const ProductQuantity = ({ quantity, setQuantity }: QuantityProps) => {
  const handleQuantity = (value: number) => {
    if (value < 0 && quantity < 2) {
      return;
    }

    setQuantity(quantity + value);
  };

  return (
    <div className="product-quantity-container">
      <button className="minus">
        <RemoveIcon
          onClick={() => {
            handleQuantity(-1);
          }}
        ></RemoveIcon>
      </button>
      <span className="quantity">{quantity}</span>
      <button className="add">
        <AddIcon
          onClick={() => {
            handleQuantity(1);
          }}
        ></AddIcon>
      </button>
    </div>
  );
};

export default ProductQuantity;
