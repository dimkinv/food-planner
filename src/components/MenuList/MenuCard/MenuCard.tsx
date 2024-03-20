import { DragEventHandler, FC } from 'react';
import './MenuCard.css'; // CSS file for styling
import { Meal } from '../../../types/meal';

export const MenuCard: FC<MealCardProps> = ({ meal, className }) => {
  const onDragStart: DragEventHandler<HTMLDivElement> = (e) => {
    e.dataTransfer.setData('text/plain', meal.id);
  }

  return (
    <div
      className={`menu-card ${className ?? ''}`}
      draggable={true}
      onDragStart={onDragStart}
    >
      <div className="card-content">
        <h4 className="card-title">{meal.title}</h4>
        <p className="card-description">{meal.description}</p>
      </div>
    </div>
  );
};

export type MealCardProps = {
  meal: Meal;
  className?: string;
}
