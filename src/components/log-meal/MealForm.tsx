
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";

type FoodItem = {
  id: string;
  name: string;
  quantity: string;
  unit: string;
  calories: number;
};

export function MealForm() {
  const { toast } = useToast();
  const [mealName, setMealName] = useState("");
  const [foodItems, setFoodItems] = useState<FoodItem[]>([
    { id: "1", name: "", quantity: "", unit: "g", calories: 0 }
  ]);

  const addFoodItem = () => {
    setFoodItems([
      ...foodItems,
      {
        id: Date.now().toString(),
        name: "",
        quantity: "",
        unit: "g",
        calories: 0
      }
    ]);
  };

  const updateFoodItem = (id: string, field: keyof FoodItem, value: string) => {
    setFoodItems(
      foodItems.map((item) =>
        item.id === id ? { ...item, [field]: value } : item
      )
    );
  };

  const removeFoodItem = (id: string) => {
    if (foodItems.length > 1) {
      setFoodItems(foodItems.filter((item) => item.id !== id));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (!mealName.trim()) {
      toast({
        title: "Error",
        description: "Please enter a meal name",
        variant: "destructive"
      });
      return;
    }

    const hasEmptyFields = foodItems.some(
      (item) => !item.name.trim() || !item.quantity.trim()
    );

    if (hasEmptyFields) {
      toast({
        title: "Error",
        description: "Please fill in all food items",
        variant: "destructive"
      });
      return;
    }

    // In a real app, this is where you would send data to your backend
    console.log("Submitting meal:", { mealName, foodItems });
    
    toast({
      title: "Success!",
      description: "Your meal has been logged",
    });
    
    // Reset form
    setMealName("");
    setFoodItems([{ id: "1", name: "", quantity: "", unit: "g", calories: 0 }]);
  };

  return (
    <div className="space-y-4">
      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <Label htmlFor="mealName" className="text-base">Meal Name</Label>
          <Input
            id="mealName"
            placeholder="E.g., Breakfast, Lunch, Dinner"
            className="mt-1"
            value={mealName}
            onChange={(e) => setMealName(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <div className="flex justify-between items-center">
            <Label className="text-base">Food Items</Label>
            <Button 
              type="button" 
              onClick={addFoodItem}
              variant="outline" 
              size="sm"
              className="text-primary border-primary hover:bg-primary/5"
            >
              + Add Item
            </Button>
          </div>
        </div>

        <div className="space-y-4">
          {foodItems.map((item, index) => (
            <Card key={item.id} className="p-3 bg-white shadow-sm">
              <div className="grid grid-cols-12 gap-2">
                <div className="col-span-12">
                  <Label htmlFor={`food-name-${item.id}`} className="sr-only">Food</Label>
                  <Input
                    id={`food-name-${item.id}`}
                    placeholder="Food name"
                    value={item.name}
                    onChange={(e) =>
                      updateFoodItem(item.id, "name", e.target.value)
                    }
                  />
                </div>
                
                <div className="col-span-5">
                  <Label htmlFor={`quantity-${item.id}`} className="sr-only">Quantity</Label>
                  <Input
                    id={`quantity-${item.id}`}
                    placeholder="Quantity"
                    type="number"
                    min="0"
                    value={item.quantity}
                    onChange={(e) =>
                      updateFoodItem(item.id, "quantity", e.target.value)
                    }
                  />
                </div>
                
                <div className="col-span-4">
                  <select
                    id={`unit-${item.id}`}
                    value={item.unit}
                    onChange={(e) =>
                      updateFoodItem(item.id, "unit", e.target.value)
                    }
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    <option value="g">g</option>
                    <option value="oz">oz</option>
                    <option value="cup">cup</option>
                    <option value="tbsp">tbsp</option>
                    <option value="tsp">tsp</option>
                    <option value="ml">ml</option>
                  </select>
                </div>
                
                <div className="col-span-3">
                  {foodItems.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removeFoodItem(item.id)}
                      className="h-10 w-full flex items-center justify-center rounded-md border border-gray-200 bg-white hover:bg-gray-50 text-gray-500"
                    >
                      ✕
                    </button>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
        
        <Button type="submit" className="w-full mt-6 bg-accent hover:bg-accent/90">
          Save Meal
        </Button>
      </form>
    </div>
  );
}
