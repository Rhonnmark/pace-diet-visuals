
import { MacroDistribution } from "@/components/analytics/MacroDistribution";
import { CalorieHistory } from "@/components/analytics/CalorieHistory";
import { NutrientBreakdown } from "@/components/analytics/NutrientBreakdown";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Analytics() {
  return (
    <div className="container max-w-md mx-auto px-4 py-6">
      <header className="mb-6">
        <h1 className="text-2xl font-semibold">Analytics</h1>
        <p className="text-gray-500">View your nutrition insights</p>
      </header>
      
      <Tabs defaultValue="day">
        <TabsList className="grid w-full grid-cols-3 mb-4">
          <TabsTrigger value="day">Day</TabsTrigger>
          <TabsTrigger value="week">Week</TabsTrigger>
          <TabsTrigger value="month">Month</TabsTrigger>
        </TabsList>
        
        <TabsContent value="day" className="space-y-5">
          <MacroDistribution />
          <NutrientBreakdown />
        </TabsContent>
        
        <TabsContent value="week" className="space-y-5">
          <CalorieHistory />
          <MacroDistribution />
          <NutrientBreakdown />
        </TabsContent>
        
        <TabsContent value="month" className="space-y-5">
          <CalorieHistory />
          <MacroDistribution />
        </TabsContent>
      </Tabs>
    </div>
  );
}
