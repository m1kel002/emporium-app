import "./ProductPage.scss";
import ProductCard from "../../components/ProductCard/ProductCard";
import { useEffect, useState } from "preact/hooks";
import { Product } from "../../../shared/models/Product";
import { fetchProducts } from "../../services/products.repository";
import ProductPageBanner from "../../components/ProductPageBanner/ProductPageBanner";
import ProductPageCategories from "../../components/ProductPageCategories/ProductPageCategories";
import { Link } from "react-router-dom";

const ProductPage = () => {
  const [data, setData] = useState<Array<Product>>();

  useEffect(() => {
    const getProducts = async () => {
      try {
        const data = await fetchProducts();
        setData(data);
      } catch (error) {
        console.log(`Error occurred when fetching products @page: ${error}`);
      }
    };

    getProducts();
  }, []);

  return (
    <>
      <ProductPageBanner></ProductPageBanner>
      <ProductPageCategories></ProductPageCategories>
      <div className="product-page-container">
        <div className="products-container">
          {data?.map((product, index) => (
            <Link to={`/products/${product.id}`}>
            <ProductCard key={index} product={product}></ProductCard></Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductPage;
