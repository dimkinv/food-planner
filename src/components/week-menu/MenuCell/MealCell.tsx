import { DragEventHandler, FC, useState } from 'react';
import './MealCell.scss';
import { Meal } from '../../../types/meal';
import { useStore } from '../../../store/store';
import { CellCard } from './CellCard/CellCard';
import { Weekday } from '../../../types/weekday';
import { MealType } from '../../../types/meal-type';

export const MealCell: FC<MealCellProps> = (props) => {
  const [mealsInCell, updateMealsInCell] = useState<Meal[]>([]);
  const availableMeals = useStore(state => state.availableMeals);
  const { addMealToPlan, removeMealFromPlan } = useStore();


  const onDrop: DragEventHandler<HTMLDivElement> = (e) => {
    const mealToAdd = availableMeals.find(meal => meal.id === e.dataTransfer.getData('text/plain'));
    if (!mealToAdd || mealsInCell.find(meal => meal.id === mealToAdd.id)) {
      return;
    }

    updateMealsInCell([...mealsInCell, mealToAdd]);
    addMealToPlan({
      meal: mealToAdd,
      mealType: props.mealType,
      weekday: props.weekday
    });
  };

  const onCardRemove = (id: string) => {
    updateMealsInCell([...mealsInCell.filter(meal => meal.id !== id)]);
    removeMealFromPlan(props.weekday, props.mealType, id);
  }


  const handleDragOver: DragEventHandler<HTMLDivElement> = (e) => {
    e.preventDefault();
    // Get the ID of the meal being dragged
    const mealIdBeingDragged = e.dataTransfer.getData('text/plain');
    // Check if the meal is already added to the mealsInCell
    if (mealsInCell.some(meal => meal.id === mealIdBeingDragged)) {
      e.dataTransfer.dropEffect = "none"; // This visually indicates that a drop is not allowed
    } else {
      e.dataTransfer.dropEffect = "copy"; // This visually indicates that a drop is allowed
    }
  };

  return (
    <div className="meal-cell">
      <h3 className="meal-title">{props.mealType}</h3>
      <div className='drop-container' onDragOver={handleDragOver} onDrop={onDrop}>
        {mealsInCell.map(meal => <CellCard key={meal.id} title={meal.title} onCardRemove={() => onCardRemove(meal.id)} />)}
      </div>
    </div>
  )
};

export type MealCellProps = {
  weekday: Weekday,
  mealType: MealType
}
