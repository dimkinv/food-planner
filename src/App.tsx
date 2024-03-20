import 'normalize.css';
import { Header } from './components/header/Header';
import { WeekMenu } from './components/week-menu/WeekMenu';
import './App.scss';
import { useStore } from './store/store';
import { useEffect } from 'react';
import { MenuList } from './components/MenuList/MenuList';
import { Meal } from './types/meal';


function App() {
  const { availableMeals, addAvailableMeals } = useStore();

  useEffect(() => {
    const meals: Meal[] = [];
    for(let i = 1; i < 20; i++){
      meals.push({ id: i.toString(), title: `Dish Name ${i}`, description: `Short description of Dish ${i}` });
    }
    addAvailableMeals(meals);
  }, []);

  return (
    <>
      <Header />
      <div className="app">
        <WeekMenu />
        <MenuList meals={availableMeals} />
      </div>
    </>

  )
}

export default App
