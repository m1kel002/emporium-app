import "./ProductPage.scss";
import ProductCard from "../../components/ProductCard/ProductCard";
import { useEffect, useState } from "preact/hooks";
import { Product } from "../../../shared/models/Product";
import { fetchProducts } from "../../services/products.repository";

export default function ProductPage() {
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
    <div className="products-container">
      {data?.map((product, index) => (
        <ProductCard key={index} product={product}></ProductCard>
      ))}
    </div>
  );
}
