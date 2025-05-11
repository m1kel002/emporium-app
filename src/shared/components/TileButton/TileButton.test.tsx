import { render, screen } from "@testing-library/react";
import TileButton from "./TileButton";

describe("<TileButton />", () => {
  test("it should mount", () => {
    const title = "Foo";
    render(<TileButton title={title} />);
    const button = screen.getByTestId("TileTitle");
    expect(button).toHaveTextContent(title);
  });
});
