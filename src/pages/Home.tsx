
import { NutritionSummary } from "@/components/home/NutritionSummary";
import { RecentMeals } from "@/components/home/RecentMeals";
import { QuickLog } from "@/components/home/QuickLog";

export default function Home() {
  return (
    <div className="container max-w-md mx-auto px-4 py-6">
      <header className="mb-6">
        <h1 className="text-2xl font-semibold">NutriPace</h1>
        <p className="text-gray-500">Wednesday, May 5</p>
      </header>
      
      <div className="space-y-5">
        <NutritionSummary />
        <RecentMeals />
        <QuickLog />
      </div>
    </div>
  );
}
