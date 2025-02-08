import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ProductPageCategories from './ProductPageCategories';

describe('<ProductPageCategories />', () => {
  test('it should mount', () => {
    render(<ProductPageCategories />);

    const productPageCategories = screen.getByTestId('ProductPageCategories');

    expect(productPageCategories).toBeInTheDocument();
  });
});