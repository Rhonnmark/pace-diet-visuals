
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type DataPoint = {
  day: string;
  calories: number;
  goal: number;
};

export function CalorieHistory() {
  // Sample data - for a real app, this would come from the API
  const data: DataPoint[] = [
    { day: 'Mon', calories: 1720, goal: 2000 },
    { day: 'Tue', calories: 1890, goal: 2000 },
    { day: 'Wed', calories: 2100, goal: 2000 },
    { day: 'Thu', calories: 1800, goal: 2000 },
    { day: 'Fri', calories: 2200, goal: 2000 },
    { day: 'Sat', calories: 1950, goal: 2000 },
    { day: 'Sun', calories: 1700, goal: 2000 },
  ];

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-2 border border-gray-200 rounded-md shadow-sm">
          <p className="font-medium">{`${payload[0].payload.day}`}</p>
          <p className="text-primary">{`Calories: ${payload[0].value}`}</p>
          <p className="text-gray-500">{`Goal: ${payload[0].payload.goal}`}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <Card className="border-none shadow-sm">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-medium">Weekly Calorie History</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[200px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={data}
              margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
            >
              <CartesianGrid strokeDasharray="3 3" vertical={false} opacity={0.3} />
              <XAxis 
                dataKey="day" 
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 12, fill: '#666' }}
              />
              <YAxis
                axisLine={false}
                tickLine={false} 
                tick={{ fontSize: 12, fill: '#666' }}
              />
              <Tooltip content={<CustomTooltip />} />
              <Bar 
                dataKey="calories" 
                fill="#4ECDC4" 
                radius={[4, 4, 0, 0]} 
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
