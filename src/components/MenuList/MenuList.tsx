import { FC } from 'react';
import { Meal } from '../../types/meal';
import './MenuList.scss';
import { MenuCard } from './MenuCard/MenuCard';
import { useNavigate } from 'react-router-dom';

export const MenuList: FC<MenuListProps> = ({ meals }) => {
  const navigate = useNavigate();
  const onAddMealClick = ()=> navigate('/meal');

  return (
    <div className="menu-list">
      <div className="menu-list-content">
        {meals.map((meal) => (
          <MenuCard className="menu-card" key={`recipe${meal.id}`} meal={meal} />
        ))}
      </div>
      <button className="add-new-recipe" type="button" onClick={onAddMealClick}><span className='material-symbols-outlined'>add</span></button>
    </div>
  );
};

export type MenuListProps = {
  meals: Meal[];
}
