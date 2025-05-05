
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function NutritionGoals() {
  return (
    <Card className="border-none shadow-sm">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-medium">Nutrition Goals</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <Label htmlFor="calories">Daily Calories</Label>
            <Input 
              id="calories" 
              type="number" 
              defaultValue="2000"
              className="mt-1"
            />
          </div>
          
          <div className="grid grid-cols-3 gap-3">
            <div>
              <Label htmlFor="protein">Protein (g)</Label>
              <Input 
                id="protein" 
                type="number" 
                defaultValue="120"
                className="mt-1"
              />
            </div>
            <div>
              <Label htmlFor="carbs">Carbs (g)</Label>
              <Input 
                id="carbs" 
                type="number" 
                defaultValue="220"
                className="mt-1"
              />
            </div>
            <div>
              <Label htmlFor="fat">Fat (g)</Label>
              <Input 
                id="fat" 
                type="number" 
                defaultValue="70"
                className="mt-1"
              />
            </div>
          </div>
          
          <div>
            <Label htmlFor="water">Daily Water Goal (glasses)</Label>
            <Input 
              id="water" 
              type="number" 
              defaultValue="8"
              className="mt-1"
            />
          </div>
          
          <Button className="w-full mt-2 bg-primary hover:bg-primary/90">
            Save Goals
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
