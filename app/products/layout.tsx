import "../globals.css";
import React from "react";

export const metadata = {
title: "Products | Buy Drones & Accessories in Nepal",
description: "Shop high-quality drones, FPV gear, and accessories in Nepal. Find branded first-hand drones, top second-hand options, and essential parts at the best prices.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="min-h-screen bg-gray-100 text-gray-900">
          <main className="p-4 max-w-7xl mx-auto">
            {children}
          </main>
        </div>
      );
}