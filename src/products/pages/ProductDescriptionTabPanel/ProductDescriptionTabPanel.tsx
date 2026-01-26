import TabPanelProps from '../../../shared/models/TabPanelProps'
import './ProductDescriptionTabPanel.scss'

interface ProductDescriptionTabPanelProps extends TabPanelProps {
  description?: string;
}

const ProductDescriptionTabPanel = ({ value, index, description }: ProductDescriptionTabPanelProps) => {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      className="desc-container"
    >
      {description || "No description available."}
    </div>
  );
};

export default ProductDescriptionTabPanel;
