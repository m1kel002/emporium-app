import { render, screen } from "@testing-library/react";
import HeaderNav from "./HeaderNav";

describe('<HeaderNav />', () => {

    test('it should mount', () => {
        render(<HeaderNav />);
        const container = screen.getByTestId('HeaderNav')
        expect(container).toBeInTheDocument();
    });
});