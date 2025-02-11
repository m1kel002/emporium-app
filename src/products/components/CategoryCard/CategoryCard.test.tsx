import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import CategoryCard from './CategoryCard';

describe('<CategoryCard />', () => {
  test('it should mount', () => {
    render(<CategoryCard />);

    const categoryCard = screen.getByTestId('CategoryCard');

    expect(categoryCard).toBeInTheDocument();
  });
});