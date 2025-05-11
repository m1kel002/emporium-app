import { render, screen } from "@testing-library/react";
import ProductRating from "./ProductRating";

describe("<ProductRating />", () => {
  test("it should mount", () => {
    render(<ProductRating rating={0} />);
    const container = screen.getByTestId("ProductRating");
    expect(container).toBeInTheDocument();
  });
});
