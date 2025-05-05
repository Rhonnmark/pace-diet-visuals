
import React from "react";
import { Outlet, useLocation, Link } from "react-router-dom";
import { Home, PieChart, Plus, User } from "lucide-react";
import { cn } from "@/lib/utils";

export function AppLayout() {
  const location = useLocation();
  const currentPath = location.pathname;

  const tabs = [
    {
      name: "Home",
      path: "/",
      icon: <Home className="h-5 w-5" />,
    },
    {
      name: "Log Meal",
      path: "/log-meal",
      icon: <Plus className="h-5 w-5" />,
    },
    {
      name: "Analytics",
      path: "/analytics",
      icon: <PieChart className="h-5 w-5" />,
    },
    {
      name: "Profile",
      path: "/profile",
      icon: <User className="h-5 w-5" />,
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <main className="flex-1 pb-16">
        <Outlet />
      </main>
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-10">
        <div className="grid grid-cols-4 h-16">
          {tabs.map((tab) => (
            <Link
              key={tab.path}
              to={tab.path}
              className={cn(
                "flex flex-col items-center justify-center transition-colors",
                currentPath === tab.path
                  ? "text-primary"
                  : "text-gray-500 hover:text-gray-700"
              )}
            >
              {tab.icon}
              <span className="text-xs mt-1">{tab.name}</span>
            </Link>
          ))}
        </div>
      </nav>
    </div>
  );
}
