import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ProductPageCategories from "./ProductPageCategories";

describe("<ProductPageCategories />", () => {
  test("it should mount", () => {
    render(<ProductPageCategories />);

    const productPageCategories = screen.getByTestId("ProductPageCategories");

    const cards = screen.getAllByTestId("CategoryCard");
    expect(cards.length).toEqual(7);

    expect(productPageCategories).toBeInTheDocument();
  });
});
