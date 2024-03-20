import { useEffect } from 'react';
import { MenuList } from '../MenuList/MenuList';
import { WeekMenu } from '../week-menu/WeekMenu';
import { Meal } from '../../types/meal';
import { useStore } from '../../store/store';
import './Dashboard.scss';

export const Dashboard = () => {
  const { availableMeals, addAvailableMeals } = useStore();

  useEffect(() => {
    const meals: Meal[] = [];
    for(let i = 1; i < 20; i++){
      meals.push({ id: i.toString(), title: `Dish Name ${i}`, description: `Short description of Dish ${i}` });
    }
    addAvailableMeals(meals);
  }, []);

  return (<div className="app">
    <WeekMenu />
    <MenuList meals={availableMeals} />
  </div>)
}
