
import { MealForm } from "@/components/log-meal/MealForm";

export default function LogMeal() {
  return (
    <div className="container max-w-md mx-auto px-4 py-6">
      <header className="mb-6">
        <h1 className="text-2xl font-semibold">Log Meal</h1>
        <p className="text-gray-500">Add your meal details below</p>
      </header>
      
      <MealForm />
    </div>
  );
}
