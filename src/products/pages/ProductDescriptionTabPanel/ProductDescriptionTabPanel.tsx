import TabPanelProps from '../../../shared/models/TabPanelProps'

const ProductDescriptionTabPanel = ({ value, index }: TabPanelProps) => {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
    >
      Description
    </div>
  );
};

export default ProductDescriptionTabPanel;
