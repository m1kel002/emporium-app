import React, { FC } from 'react';
import './CategoryCard.scss';
import { Category } from '../../../shared/models/category';

interface CategoryCardProps {
  category: Category;
}
const CategoryCard: FC<CategoryCardProps> = (props: CategoryCardProps) => (
  <div className="CategoryCard" data-testid="CategoryCard">
    <div className="CategoryImage">
      <img src={props.category.image} alt="category" />
    </div>
    <div className="CategoryDetails">{props.category.name}</div>
  </div>
);

export default CategoryCard;
