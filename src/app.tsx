import './app.scss'
import ProductPageBanner from "./products/components/ProductPageBanner/ProductPageBanner";
import ProductPageCategories from "./products/components/ProductPageCategories/ProductPageCategories";
import ProductPage from './products/pages/ProductPage/ProductPage';
import HeaderNav from './shared/components/HeaderNav/HeaderNav';

export function App() {
  return (
		<div>
			<HeaderNav></HeaderNav>
			<ProductPageBanner></ProductPageBanner>
			<ProductPageCategories></ProductPageCategories>
			<div className="ProductPageContainer">
				<ProductPage></ProductPage>
			</div>
		</div>
	);
}
