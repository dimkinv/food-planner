import { create } from 'zustand';
import { Meal } from '../types/meal';
import { MealType } from '../types/meal-type';
import { Weekday } from '../types/weekday';

export const useStore = create<AppStore>(set => ({
  mealPlan: [],
  availableMeals: [],
  addAvailableMeals: (availableMeals: Meal[]) => set(() => ({ availableMeals })),
  addMealToPlan: (mealSchedule: MealSchedule) => set((state) => ({ mealPlan: [...state.mealPlan, mealSchedule] })),
  removeMealFromPlan: (weekday: Weekday, mealType: MealType, mealId: string) => set(state => ({
    mealPlan: [...state.mealPlan.filter(mSch => mSch.meal.id !== mealId || mSch.mealType !== mealType || mSch.weekday !== weekday)]
  }))
}))


export type AppStore = {
  mealPlan: MealSchedule[],
  availableMeals: Meal[],
  addAvailableMeals: (meals: Meal[]) => void;
  addMealToPlan: (mealSchedule: MealSchedule) => void;
  removeMealFromPlan: (weekday: Weekday, mealType: MealType, mealId: string) => void;
}

export type MealSchedule = {
  mealType: MealType;
  weekday: Weekday;
  meal: Meal
}
