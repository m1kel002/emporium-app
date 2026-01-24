import { Product } from "../../shared/models/Product";
import mockProductDetail from '../../shared/mocks/product-detail.json';

const BASE_URL = import.meta.env.VITE_BASE_URL;

interface ProductsParams {
  productName?: string;
}

export const fetchProducts = async (productName?: string): Promise<Product[] | undefined> => {
  const productsParams: ProductsParams = {productName}
  let endpoint = `${BASE_URL}/product`;
  const searchParams = new URLSearchParams();
  if (productsParams.productName) {
    searchParams.append("productName", productsParams.productName);
  }

  try {
    if (searchParams.toString()) {
     endpoint = `${endpoint}?${searchParams.toString()}`; 
    }
    const response = await fetch(endpoint);
    const data = await response.json();
    // Temporary image assignment for testing purposes
    const products: Product[] = data.results.map((item: Product) => ({...item, image: "http://localhost:8000/media/media/test-image-upload.png"}));
    return products;
  } catch (error) {
    console.error(`Error fetching products: ${error}`);
  }
};

export const fetchProductDetails = async (
  id: string
): Promise<Product | undefined> => {

  return mockProductDetail as Product;

  // const endpoint = `${BASE_URL}/product/${id}`;

  // try {
  //   const response = await fetch(endpoint);
  //   const data = await response.json();
  //   return data;
  // } catch (error) {
  //   console.error(`Error fetching product details ${error}`);
  // }
};
