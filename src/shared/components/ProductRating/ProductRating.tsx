import { Rating } from "@mui/material";
import "./ProductRating.scss";

interface RatingProps {
    rating: number;
    precision?: number;

}

const ProductRating = ({rating= 0, precision=0.5}: RatingProps) => {
  return  rating === 0 ? <span className="no-rating">no rating yet</span>: <Rating precision={precision} value={rating} readOnly data-testid="ProductRating"></Rating>;
};

export default ProductRating;
