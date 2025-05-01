import TabPanelProps from "../../../shared/models/TabPanelProps";
import ReviewCard from "../../components/ReviewCard/ReviewCard";

const ProductReviewTabPanel = ({ value, index }: TabPanelProps) => {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
    >
      <ReviewCard></ReviewCard>
      <ReviewCard></ReviewCard>
      <ReviewCard></ReviewCard>
    </div>
  );
};

export default ProductReviewTabPanel;
