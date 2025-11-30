import React from "react";
import "../../../globals.css";

export const metadata = {
  title: "DJI Mini 3 Nepal | Best Deals & Fast Delivery",
  description:
  `Buy the DJI Mini 3 in Nepal.
   Lightweight 4K drone perfect for beginners and creators.
   Enjoy great flight time, smooth footage, and the best deals in Kathmandu.`,
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="max-w-7xl mx-auto p-4">
      {children}
      </main>
  );
}