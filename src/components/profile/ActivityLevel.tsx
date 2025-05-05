
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type ActivityOption = {
  id: string;
  label: string;
  description: string;
};

export function ActivityLevel() {
  const [selectedActivity, setSelectedActivity] = React.useState("moderate");
  
  const activityOptions: ActivityOption[] = [
    {
      id: "sedentary",
      label: "Sedentary",
      description: "Little to no exercise"
    },
    {
      id: "light",
      label: "Light",
      description: "Light exercise 1-3 days/week"
    },
    {
      id: "moderate",
      label: "Moderate",
      description: "Moderate exercise 3-5 days/week"
    },
    {
      id: "active",
      label: "Active",
      description: "Hard exercise 6-7 days/week"
    },
    {
      id: "very-active",
      label: "Very Active",
      description: "Very hard exercise & physical job"
    }
  ];

  return (
    <Card className="border-none shadow-sm">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-medium">Activity Level</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          {activityOptions.map((option) => (
            <div
              key={option.id}
              onClick={() => setSelectedActivity(option.id)}
              className={`p-3 rounded-md cursor-pointer border ${
                selectedActivity === option.id
                  ? "border-primary bg-primary/5"
                  : "border-gray-200 hover:border-gray-300"
              }`}
            >
              <div className="flex items-center gap-2">
                <div
                  className={`w-4 h-4 rounded-full border ${
                    selectedActivity === option.id
                      ? "border-primary bg-primary"
                      : "border-gray-300"
                  }`}
                />
                <div>
                  <h3 className="font-medium">{option.label}</h3>
                  <p className="text-xs text-gray-500">{option.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
