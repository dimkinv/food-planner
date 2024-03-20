import { MealType } from '../../types/meal-type';
import { Weekday } from '../../types/weekday';
import { MealCell } from './MenuCell/MealCell';
import './WeekMenu.css';

export const WeekMenu = () => {
  return (
    <div className="week-menu">
      {mapEnum(Weekday, (day) => (
        <div key={day} className="day-column">
          <h2 className="day-title">{day}</h2>
          {mapEnum(MealType, (mealType) => (
            <MealCell key={mealType} weekday={day} mealType={mealType} />
          ))}
        </div>
      ))}
    </div>
  );
};

function mapEnum<E extends { [k: string]: string }, T>(enumObj: E, callback: (value: E[keyof E]) => T): T[] {
  return (Object.values(enumObj) as E[keyof E][]).map(callback);
}
