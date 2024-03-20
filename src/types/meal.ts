import { Ingredient } from "./ingredient";

export type Meal = {
  id: string;
  title: string;
  description: string;
  ingredients?: Ingredient[];
}
