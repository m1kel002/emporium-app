import { Product } from "../../shared/models/Product";
const BASE_URL = import.meta.env.VITE_BASE_URL;

export const fetchProducts = async (): Promise<Product[] | undefined> => {
  const endpoint = `${BASE_URL}/product`;

  try {
    const response = await fetch(endpoint);
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error(`Error fetching products: ${error}`);
  }
};
