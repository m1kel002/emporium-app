import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ProductQuantity from "./ProductQuantity";

describe("<ProductQuantity />", () => {
  test("it should mount", () => {
    render(<ProductQuantity quantity={0} setQuantity={() => {}} />);
    const container = screen.getByTestId("quantityContainer");
    const minusButton = screen.getByTestId("minus");
    const addButton = screen.getByTestId("add");
    const quantity = screen.getByTestId("quantity");

    expect(quantity).toBeInTheDocument();
    expect(minusButton).toBeInTheDocument();
    expect(addButton).toBeInTheDocument();
    expect(container).toBeInTheDocument();
  });

  test("it should call setQuantity function when minus button is clicked", async () => {
    const setQuantity = jest.fn();
    render(<ProductQuantity quantity={5} setQuantity={setQuantity} />);
    const minusButton = screen.getByTestId("minus");

    await userEvent.click(minusButton);
    expect(setQuantity).toHaveBeenCalled();
  });

  test("it should call setQuantity function when add button is clicked", async () => {
    const setQuantity = jest.fn();
    render(<ProductQuantity quantity={1} setQuantity={setQuantity} />);
    const addButton = screen.getByTestId("add");

    await userEvent.click(addButton);
    expect(setQuantity).toHaveBeenCalled();
  });

  test("it should set quantity text based on quantity props", () => {
    render(<ProductQuantity quantity={100} setQuantity={jest.fn()} />);
    const quantityText = screen.getByTestId("quantity");

    expect(quantityText).toHaveTextContent("100");
  });

  test("it should not call setQuantity function when quantity is 1 and minus button is clicked", async () => {
    const setQuantity = jest.fn();
    render(<ProductQuantity quantity={1} setQuantity={setQuantity} />);
    const minusButton = screen.getByTestId("minus");

    await userEvent.click(minusButton);
    expect(setQuantity).not.toHaveBeenCalled();
  });
});
