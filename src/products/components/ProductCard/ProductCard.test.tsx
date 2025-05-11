import { render, screen } from "@testing-library/react";
import ProductCard from "./ProductCard";
import { Product } from "../../../shared/models/Product";

describe("<ProductCard>", () => {
  test("it should mount", () => {
    const product = {} as Product;
    render(<ProductCard product={product} />);

    const productCard = screen.getByTestId("ProductCard");

    expect(productCard).toBeInTheDocument();
  });

  test("it should contain product image, name and price", () => {
    const product = {
      image: "",
      name: "Product1",
      price: 250.51,
    } as Product;

    render(<ProductCard product={product} />);
    const productName = screen.getByTestId("ProductName");
    const productImage = screen.getByTestId("ProductImage");
    const productPrice = screen.getByTestId("ProductPrice");

    expect(productName).toBeInTheDocument();
    expect(productImage).toBeInTheDocument();
    expect(productPrice).toBeInTheDocument();
    expect(productName).toHaveTextContent("Product1");
    expect(productPrice).toHaveTextContent("$250.51");
  });
});
