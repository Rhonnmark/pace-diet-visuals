
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type Meal = {
  id: string;
  name: string;
  time: string;
  calories: number;
  image?: string;
};

export function RecentMeals() {
  // Sample data
  const meals: Meal[] = [
    {
      id: "1",
      name: "Breakfast",
      time: "8:30 AM",
      calories: 420,
      image: "🍳"
    },
    {
      id: "2",
      name: "Lunch",
      time: "12:45 PM",
      calories: 650,
      image: "🥗"
    },
    {
      id: "3",
      name: "Snack",
      time: "3:30 PM",
      calories: 180,
      image: "🍎"
    },
  ];

  return (
    <Card className="border-none shadow-sm">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-medium">Recent Meals</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {meals.map((meal) => (
            <div 
              key={meal.id}
              className="flex items-center justify-between p-3 bg-white rounded-lg border border-gray-100"
            >
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-xl mr-3">
                  {meal.image}
                </div>
                <div>
                  <h4 className="font-medium">{meal.name}</h4>
                  <p className="text-xs text-gray-500">{meal.time}</p>
                </div>
              </div>
              <div className="text-right">
                <span className="font-semibold">{meal.calories}</span>
                <span className="text-xs text-gray-500 ml-1">cal</span>
              </div>
            </div>
          ))}
          <button className="w-full py-2 mt-2 text-primary hover:text-primary/80 font-medium text-sm">
            View All Meals
          </button>
        </div>
      </CardContent>
    </Card>
  );
}
