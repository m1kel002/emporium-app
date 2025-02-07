import './app.scss'
import ProductPage from './products/pages/ProductPage/ProductPage';
import HeaderNav from './shared/components/HeaderNav/HeaderNav';

export function App() {
  return (<div>
    <HeaderNav></HeaderNav>
    <ProductPage></ProductPage>
  </div>);
}
