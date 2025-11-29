import React from "react";
import "../../../globals.css";


export const metadata = {
  title: "Buy DJI Mini 3 | Best Price in Nepal",
  description:
  `Buy the DJI Mini 3 drone in Nepal — lightweight, portable, and powerful.
   Shop now for the best price, fast shipping across Kathmandu and beyond, and
    enjoy high-resolution photos, 4K video, and premium aerial performance.`,
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    
    <main className="max-w-7xl mx-auto p-4">
      {children}
      </main>
      
  );
}