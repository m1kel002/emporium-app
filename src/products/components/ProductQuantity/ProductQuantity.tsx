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
    <div className="product-quantity-container" data-testid="quantityContainer">
      <button className="minus" data-testid="minus" onClick={() => {
            handleQuantity(-1);
      }}>
        <RemoveIcon
        ></RemoveIcon>
      </button>
      <span className="quantity" data-testid="quantity">{quantity}</span>
      <button className="add" data-testid="add" onClick={() => {
            handleQuantity(1);
          }}>
        <AddIcon

        ></AddIcon>
      </button>
    </div>
  );
};

export default ProductQuantity;
