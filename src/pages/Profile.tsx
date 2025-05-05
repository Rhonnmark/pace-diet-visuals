
import { UserInfo } from "@/components/profile/UserInfo";
import { NutritionGoals } from "@/components/profile/NutritionGoals";
import { ActivityLevel } from "@/components/profile/ActivityLevel";

export default function Profile() {
  return (
    <div className="container max-w-md mx-auto px-4 py-6">
      <header className="mb-6">
        <h1 className="text-2xl font-semibold">Profile</h1>
        <p className="text-gray-500">Manage your account and preferences</p>
      </header>
      
      <div className="space-y-5">
        <UserInfo />
        <NutritionGoals />
        <ActivityLevel />
      </div>
    </div>
  );
}
