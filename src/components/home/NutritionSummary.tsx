
import React from "react";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type MacroProgressProps = {
  label: string;
  current: number;
  goal: number;
  color: string;
};

const MacroProgress = ({ label, current, goal, color }: MacroProgressProps) => {
  const percentage = Math.min(Math.round((current / goal) * 100), 100);
  
  return (
    <div className="space-y-1">
      <div className="flex justify-between text-sm">
        <span>{label}</span>
        <span className="font-medium">
          {current}g / {goal}g
        </span>
      </div>
      <Progress 
        value={percentage} 
        className={`h-2 ${color}`} 
      />
    </div>
  );
};

export function NutritionSummary() {
  // Sample data - would come from API/state in a real app
  const dailyData = {
    calories: {
      current: 1450,
      goal: 2000,
    },
    macros: {
      protein: {
        current: 75,
        goal: 120,
      },
      carbs: {
        current: 160,
        goal: 220,
      },
      fat: {
        current: 50,
        goal: 70,
      },
    },
    water: {
      current: 5,
      goal: 8,
    },
  };

  const caloriePercentage = Math.round(
    (dailyData.calories.current / dailyData.calories.goal) * 100
  );

  return (
    <Card className="border-none shadow-sm">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-medium">Today's Summary</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <p className="text-sm text-muted-foreground">Calories</p>
            <div className="flex gap-1 items-baseline">
              <span className="text-2xl font-bold">{dailyData.calories.current}</span>
              <span className="text-sm text-muted-foreground">/ {dailyData.calories.goal}</span>
            </div>
          </div>
          <div className="h-16 w-16 rounded-full border-4 border-primary flex items-center justify-center">
            <span className="text-lg font-semibold">{caloriePercentage}%</span>
          </div>
        </div>

        <div className="space-y-3 pt-2">
          <MacroProgress 
            label="Protein" 
            current={dailyData.macros.protein.current}
            goal={dailyData.macros.protein.goal}
            color="bg-blue-400" 
          />
          <MacroProgress 
            label="Carbs" 
            current={dailyData.macros.carbs.current}
            goal={dailyData.macros.carbs.goal}
            color="bg-green-400" 
          />
          <MacroProgress 
            label="Fat" 
            current={dailyData.macros.fat.current}
            goal={dailyData.macros.fat.goal}
            color="bg-yellow-400" 
          />
        </div>

        <div className="pt-1">
          <div className="flex justify-between text-sm mb-1">
            <span>Water Intake</span>
            <span>{dailyData.water.current} / {dailyData.water.goal} glasses</span>
          </div>
          <div className="flex">
            {Array.from({ length: dailyData.water.goal }).map((_, i) => (
              <div 
                key={i}
                className={`h-6 w-6 mr-1 rounded-full flex items-center justify-center ${
                  i < dailyData.water.current ? "bg-blue-500 text-white" : "bg-gray-200"
                }`}
              >
                <span className="text-xs">💧</span>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
