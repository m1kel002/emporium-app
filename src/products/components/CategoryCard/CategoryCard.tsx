import React, { FC } from 'react';
import './CategoryCard.scss';
import { Category } from '../../../shared/models/Category';

interface CategoryCardProps {
  category: Category;
}
const CategoryCard: FC<CategoryCardProps> = (props: CategoryCardProps) => (
  <div className="CategoryCard" data-testid="CategoryCard">
    <div className="CategoryImage">
      <img data-testid="CategoryImage" src={props.category.image} alt={props.category.name} />
    </div>
    <div data-testid="CategoryName" className="CategoryDetails">{props.category.name}</div>
  </div>
);

export default CategoryCard;
