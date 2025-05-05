
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function QuickLog() {
  const quickItems = [
    {
      name: "Coffee",
      calories: 5,
      icon: "☕️"
    },
    {
      name: "Apple",
      calories: 95,
      icon: "🍎"
    },
    {
      name: "Banana",
      calories: 105,
      icon: "🍌"
    },
    {
      name: "Yogurt",
      calories: 150,
      icon: "🥛"
    }
  ];

  return (
    <Card className="border-none shadow-sm">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-medium">Quick Log</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-2">
          {quickItems.map((item, index) => (
            <button
              key={index}
              className="flex items-center p-3 bg-white rounded-lg border border-gray-100 hover:border-primary/50 transition-colors"
            >
              <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-lg mr-2">
                {item.icon}
              </div>
              <div className="text-left">
                <div className="font-medium text-sm">{item.name}</div>
                <div className="text-xs text-gray-500">{item.calories} cal</div>
              </div>
            </button>
          ))}
        </div>
        <Button className="w-full mt-3 bg-accent hover:bg-accent/90">
          Log a New Meal
        </Button>
      </CardContent>
    </Card>
  );
}
