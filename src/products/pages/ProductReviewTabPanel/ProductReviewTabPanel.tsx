import { Review } from "../../../shared/models/Review";
import TabPanelProps from "../../../shared/models/TabPanelProps";
import ReviewCard from "../../components/ReviewCard/ReviewCard";

interface ProductReviewTabPanelProps extends TabPanelProps {
  reviews?: Array<Review>
}

const ProductReviewTabPanel = ({ value, index, reviews }: ProductReviewTabPanelProps) => {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
    >
      {reviews?.map((review, idx) => (
        <ReviewCard key={idx} review={review}></ReviewCard>
      ))}
    </div>
  );
};

export default ProductReviewTabPanel;
