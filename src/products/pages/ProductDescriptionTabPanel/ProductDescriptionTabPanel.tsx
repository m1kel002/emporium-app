import TabPanelProps from '../../../shared/models/TabPanelProps'
import './ProductDescriptionTabPanel.scss'

const ProductDescriptionTabPanel = ({ value, index }: TabPanelProps) => {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      className="desc-container"
    >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. In interdum eros vel mi rhoncus fringilla. Aliquam eget odio vel magna lobortis vestibulum nec non diam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin ut libero condimentum, rhoncus leo non, commodo orci. Vivamus porttitor fermentum lectus sed congue. Aenean eget neque euismod, sollicitudin massa ut, fermentum justo. Integer accumsan pellentesque faucibus. Vivamus suscipit leo in nunc pulvinar ullamcorper. Aenean laoreet vitae nibh vitae pulvinar. Maecenas malesuada enim non purus mollis, eu ullamcorper mauris bibendum. Proin eleifend sed dui at convallis. Cras mauris lorem, pretium nec elit ut, molestie tempor libero. Suspendisse eros neque, interdum ac lacus sit amet, gravida efficitur libero. Quisque at urna id odio volutpat dignissim et vitae felis. Pellentesque posuere, ligula a tempus tempor, ligula lacus cursus sem, ut laoreet erat turpis nec arcu. Proin ac porttitor nulla, vitae mollis nisl.
    </div>
  );
};

export default ProductDescriptionTabPanel;
