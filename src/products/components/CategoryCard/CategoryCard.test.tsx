import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import CategoryCard from "./CategoryCard";
import { Category } from "../../../shared/models/category";

describe("<CategoryCard />", () => {
  test("it should mount", () => {
    const category = {
      name: "test",
      image: "test",
    };
    render(<CategoryCard category={category} />);

    const categoryCard = screen.getByTestId("CategoryCard");

    const image = screen.getByTestId("CategoryImage");
    const name = screen.getByTestId("CategoryName");

    expect(image).toBeInTheDocument();
    expect(name).toBeInTheDocument();
    expect(categoryCard).toBeInTheDocument();
  });
});
