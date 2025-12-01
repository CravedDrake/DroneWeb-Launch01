import "../globals.css";
import React from "react";

export const metadata = {
  title: "Drone Mapping Nepal | Simple and Accurate Aerial Survey Service",
  description:
    "We offer easy and accurate drone mapping in Nepal. Get clear aerial photos, 3D maps and land survey data for construction, farming and real estate. Fast, affordable and reliable service.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <main className="p-4 max-w-7xl mx-auto">{children}</main>
    </div>
  );
}
