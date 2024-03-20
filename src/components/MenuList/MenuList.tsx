import { FC } from 'react';
import { Meal } from '../../types/meal';
import './MenuList.scss';
import { MenuCard } from './MenuCard/MenuCard';

export const MenuList: FC<MenuListProps> = ({ meals }) => {
  return (
    <div className="menu-list">
      <div className="menu-list-content">
        {meals.map((meal) => (
          <MenuCard className="menu-card" key={`recipe${meal.id}`} meal={meal} />
        ))}
      </div>
      <button className="add-new-recipe" type="button"><span className='material-symbols-outlined'>add</span></button>
    </div>
  );
};

export type MenuListProps = {
  meals: Meal[];
}
