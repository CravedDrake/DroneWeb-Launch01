import "../globals.css";
import React from "react";
import Header from "../../components/header";


export const metadata = {
title: "Products | Drone CMS",
description: "Products listing page with search & pagination",
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