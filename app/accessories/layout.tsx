import "../globals.css";
import React from "react";



export const metadata = {
title: "Drone Accessories Nepal | Premium Parts & Gear",
description: "Find high quality drone accessories in Nepal. Batteries, Propellers, Gimbal, Arms, GPS Modules and more. Premium parts for dji FPV and professional drones.",
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