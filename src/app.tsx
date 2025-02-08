import './app.scss'
import ProductPageBanner from "./products/components/ProductPageBanner/ProductPageBanner";
import ProductPage from './products/pages/ProductPage/ProductPage';
import HeaderNav from './shared/components/HeaderNav/HeaderNav';

export function App() {
  return (
		<div>
			<HeaderNav></HeaderNav>
			<ProductPageBanner></ProductPageBanner>
			<ProductPage></ProductPage>
		</div>
	);
}
