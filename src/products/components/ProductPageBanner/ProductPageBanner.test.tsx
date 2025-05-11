import { render, screen } from "@testing-library/react";
import ProductPageBanner from "./ProductPageBanner";

describe('<ProductPageBanner />', () => {

    test('it should mount', () => {
        render(<ProductPageBanner />)
        const banner = screen.getByTestId("ProductPageBanner");

        expect(banner).toBeInTheDocument();
    });
});