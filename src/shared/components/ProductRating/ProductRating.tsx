import { Rating } from "@mui/material";
import "./ProductRating.scss";

interface RatingProps {
    rating: number;
    precision: number;

}

const ProductRating = ({rating= 0, precision=0.5}: RatingProps) => {
  return <Rating precision={precision} value={rating} readOnly></Rating>;
};

export default ProductRating;
