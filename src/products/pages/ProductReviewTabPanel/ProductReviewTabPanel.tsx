import TabPanelProps from "../../../shared/models/TabPanelProps";

const ProductReviewTabPanel = ({ value, index }: TabPanelProps) => {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
    >
      Product Review
    </div>
  );
};

export default ProductReviewTabPanel;
