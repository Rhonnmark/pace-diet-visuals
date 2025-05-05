
import { Progress } from "@/components/ui/progress";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type Nutrient = {
  name: string;
  current: number;
  goal: number;
  unit: string;
  color: string;
};

export function NutrientBreakdown() {
  // Sample data - for a real app, this would come from an API
  const nutrients: Nutrient[] = [
    { 
      name: "Vitamin C", 
      current: 75, 
      goal: 90, 
      unit: "mg",
      color: "bg-orange-400" 
    },
    { 
      name: "Calcium", 
      current: 850, 
      goal: 1000, 
      unit: "mg",
      color: "bg-blue-400" 
    },
    { 
      name: "Iron", 
      current: 12, 
      goal: 18, 
      unit: "mg",
      color: "bg-red-400" 
    },
    { 
      name: "Fiber", 
      current: 22, 
      goal: 25, 
      unit: "g",
      color: "bg-green-400" 
    },
    { 
      name: "Sodium", 
      current: 1500, 
      goal: 2300, 
      unit: "mg",
      color: "bg-gray-400" 
    }
  ];

  return (
    <Card className="border-none shadow-sm">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-medium">Nutrient Breakdown</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {nutrients.map((nutrient) => {
            const percentage = Math.min(Math.round((nutrient.current / nutrient.goal) * 100), 100);
            
            return (
              <div key={nutrient.name} className="space-y-1">
                <div className="flex justify-between text-sm">
                  <span>{nutrient.name}</span>
                  <span className="font-medium">
                    {nutrient.current}{nutrient.unit} / {nutrient.goal}{nutrient.unit}
                  </span>
                </div>
                <Progress value={percentage} className={`h-2 ${nutrient.color}`} />
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}
