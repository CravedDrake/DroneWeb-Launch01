import "../globals.css";
import React from "react";



export const metadata = {
title: "About Drone Zone Nepal | Buy, Rent & Repair Drones",
description: "Learn about our drone shop in Nepal. From buying and selling drones to rentals, accessories, repairs, and training, we deliver top-quality service across the country.",
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