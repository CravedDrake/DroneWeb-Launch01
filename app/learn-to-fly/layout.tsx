import "../globals.css";
import React from "react";



export const metadata = {
title: "Drone Training Nepal | Learn FPV & Normal Flying",
description: "Join Nepal’s top drone training program. Learn to fly FPV and normal drones with hands-on sessions, expert guidance, and real-world practice for all skill levels.",
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