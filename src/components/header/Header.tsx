import { useStore } from '../../store/store';
import './Header.scss';

export const Header = () => {
  const plannedMeals = useStore(store => store.mealPlan);
  return (
    <header className="app-header">
      <h1 className="main-title">Food Planner</h1>
      <div>{JSON.stringify(plannedMeals)}</div>
      <div className="profile-picture">
        <img src="path/to/profile/picture.jpg" alt="Profile" />
      </div>
    </header>
  );
};
