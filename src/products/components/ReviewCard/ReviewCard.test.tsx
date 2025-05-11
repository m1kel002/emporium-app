import { render, screen } from "@testing-library/react";
import ReviewCard from "./ReviewCard";

describe("<ReviewCard />", () => {
  test("it should mount", () => {
    render(<ReviewCard />);

    const container = screen.getByTestId("ReviewCard");
    expect(container).toBeInTheDocument();
  });

  test("it should display review info", () => {
    render(<ReviewCard />)
    const image = screen.getByTestId("ReviewImage")
    const name = screen.getByTestId("ReviewName")
    const message = screen.getByTestId("ReviewMessage")

    expect(image).toBeInTheDocument();
    expect(name).toBeInTheDocument();
    expect(message).toBeInTheDocument();
  })
});
