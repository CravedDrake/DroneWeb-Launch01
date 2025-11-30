import React from "react";
import "../../../globals.css";

export const metadata = {
  title: "DJI Mini 4 Pro Nepal | Best Price & Fast Delivery",
  description:
    "Shop the DJI Mini 4 Pro in Nepal. Ultra-light 4K drone with advanced features, long flight time, and pro-level stability. Best price and fast delivery in Kathmandu.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="max-w-7xl mx-auto p-4">
      {children}
      </main>
      
  );
}