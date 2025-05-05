
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function UserInfo() {
  // Sample data
  const user = {
    name: "Alex Johnson",
    email: "alex@example.com",
    joinDate: "Member since May 2023",
    photoUrl: ""
  };

  return (
    <Card className="border-none shadow-sm">
      <CardContent className="pt-6">
        <div className="flex flex-col items-center">
          <Avatar className="h-20 w-20 mb-4">
            <AvatarImage src={user.photoUrl} alt={user.name} />
            <AvatarFallback className="bg-primary text-primary-foreground text-lg">
              {user.name.split(" ").map(n => n[0]).join("")}
            </AvatarFallback>
          </Avatar>
          
          <h2 className="text-xl font-semibold mb-1">{user.name}</h2>
          <p className="text-sm text-gray-500 mb-1">{user.email}</p>
          <p className="text-xs text-gray-400">{user.joinDate}</p>
          
          <div className="flex gap-3 mt-4 w-full">
            <Button variant="outline" className="flex-1">
              Edit Profile
            </Button>
            <Button variant="outline" className="flex-1">
              Settings
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
