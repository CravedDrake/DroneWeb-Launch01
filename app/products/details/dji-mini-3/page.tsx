"use client";
import React, { useState } from "react";

export default function Page() {
  const images = [
    "/dji_mini_3_01.jpg",
    "/dji_mini_3_02.jpg",
    "/dji_mini_3_03.jpg",
  ];

  const videos = ["/dji_mini_3.mp4"]; // placeholders

  const [selectedMedia, setSelectedMedia] = useState(images[0]);
  const [activeTab, setActiveTab] = useState("specs");
  const phoneNumber = '9779705275917'; // include country code, e.g., 977 for Nepal
  const buyMessage = encodeURIComponent('Hello, Can I get for info of DJI Mini 4 Pro to purchase it?');
  const rentMessage = encodeURIComponent('Hello, How much is the cost to rent DJI Mini 4 Pro?');

  return (
    <div className="w-full space-y-6">
      <h1 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-wide text-center">
  DJI Mini 3
</h1>


      {/* Media Section */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-x-7">
  {/* Left thumbnails */}
  <div className=" ml-10 md:col-span-2 flex flex-row md:flex-col gap-1 justify-start overflow-x-auto">
  {images.map((img, i) => (
    <div
      key={i}
      className="w-14 md:w-16 aspect-square shrink-0 relative flex items-center justify-center bg-white border border-teal-600 rounded-lg cursor-pointer hover:scale-105 transition"
      onClick={() => setSelectedMedia(img)}
    >
      <img
        src={img}
        className="w-full h-full object-contain p-1"
        alt={`thumbnail-${i}`}
      />
    </div>
  ))}

  {videos.map((vid, i) => (
    <div
      key={i}
      className="w-14 h-15 md:w-15 aspect-square shrink-0 relative flex items-center justify-center bg-black border border-teal-600 rounded-lg cursor-pointer hover:scale-105 transition"
      onClick={() => setSelectedMedia(vid)}
    >
      <video
        src={vid}
        className="w-full h-full object-contain p-1"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <svg
          className="w-6 h-6 text-white opacity-80"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M8 5v14l11-7z" />
        </svg>
      </div>
    </div>
  ))}
</div>


  {/* Selected Viewer */}
  <div className="mt-5 mb-5 md:col-span-6 border-2 border-stone-700 rounded-xl overflow-hidden aspect-video">
    {selectedMedia.endsWith(".mp4") ? (
      <video
        controls
        src={selectedMedia}
        className="w-full h-full object-cover rounded-lg"
      />
    ) : (
      <img
        src={selectedMedia}
        className="w-full h-full object-cover rounded-lg"
      />
    )}
  </div>



        {/* Short Description */}
        <div className="md:col-span-3 space-y-4">
  <p className="font-semibold">
  DJI Mini 3 – 4K UHD Camera | 30FPS | 12MP Photos | 34-min Flight Time | 249g Ultra-Light |
  3-Axis Gimbal | GPS & Obstacle Sensing | HDR Video | Panorama Mode | QuickShot Modes | Remote Controller Included
  </p>

  {/* Buttons container */}
  <div className="flex flex-wrap gap-4">
  <button
  onClick={() => {
    window.open(`https://wa.me/${phoneNumber}?text=${buyMessage}`, '_blank');
  }}
  className="flex-1 sm:flex-auto bg-blue-600 hover:bg-blue-700 hover:scale-95 text-white p-3 rounded-lg shadow transition-all duration-200"
>
  Buy Now
</button>


    <button 
    onClick={() => {
      window.open(`https://wa.me/${phoneNumber}?text=${rentMessage}`, '_blank');
    }}
    className="flex-1 sm:flex-auto bg-teal-600 hover:bg-teal-700 hover:scale-95 text-white p-3 rounded-lg shadow transition-all duration-200"
    >
      Rent Now
    </button>
  </div>
</div>

      </div>

      {/* Tabs */}
      <div className="flex space-x-4 border-b pb-2 font-semibold">
        <button
          onClick={() => setActiveTab("specs")}
          className={`pb-2 ${activeTab === "specs" ? "border-b-2 border-teal-600 font-semibold text-xl" : ""}`}
        >
          Specifications
        </button>
        <button
          onClick={() => setActiveTab("desc")}
          className={`pb-2 ${activeTab === "desc" ? "border-b-2 border-teal-600 font-semibold text-xl" : ""}`}
        >
          Description
        </button>
      </div>

      {/* Specification Table */}
      {activeTab === "specs" && (
  <div className="divide-y">
    {/* Row */}
    <div className="py-3 grid grid-cols-1 md:grid-cols-3">
      <span className="font-semibold text-gray-800">Brand</span>
      <span className="md:col-span-2 text-gray-700">DJI</span>
    </div>

    {/* Row */}
    <div className="py-3 grid grid-cols-1 md:grid-cols-3 items-center">
      <span className="font-semibold text-gray-800">Camera</span>
      <ul className="md:col-span-2 text-gray-700 list-disc list-inside space-y-1">
  <li>4K HDR video recording</li>
  <li>1/1.3-inch CMOS sensor</li>
  <li>12MP photos</li>
  <li>f/1.7 aperture for better low-light shots</li>
  <li>True Vertical Shooting</li> 
  <li>4x digital zoom</li>                          
</ul>

    </div>

    {/* Row */}
    <div className="py-3 grid grid-cols-1 md:grid-cols-3 items-center">
      <span className="font-semibold text-gray-800">Flight Time</span>
      <ul className="md:col-span-2 text-gray-700 list-disc list-inside space-y-1">
  <li>Up to 38 minutes max flight time</li>
  <li>Strong wind resistance</li>
  <li>Stable hovering performance</li>
  <li>Max flight speed: 16 m/s (Sport Mode)</li>                           
</ul>
    </div>

    {/* Row */}
    <div className="py-3 grid grid-cols-1 md:grid-cols-3 items-center">
      <span className="font-semibold text-gray-800">Safety & Navigation</span>
      <ul className="md:col-span-2 text-gray-700 list-disc list-inside space-y-1">
  <li>GPS + GLONASS positioning</li>
  <li>Return-to-Home function</li>
  <li>Downward vision sensors for precise landing</li>
  <li>Lightweight 249g for safer, easier operation</li>                           
</ul>
    </div>

    {/* Row */}
    <div className="py-3 grid grid-cols-1 md:grid-cols-3 items-center">
      <span className="font-semibold text-gray-800">Transmission & Control</span>
      <ul className="md:col-span-2 text-gray-700 list-disc list-inside space-y-1">
  <li>1080p/30fps live video feed</li>
  <li>DJI O2 transmission system</li>
  <li>Low-latency long-distance transmission</li>  
  <li>Compatible with DJI RC-N1 and DJI RC</li>                          
</ul>
    </div>

    {/* Row */}
    <div className="py-3 grid grid-cols-1 md:grid-cols-3 items-center">
      <span className="font-semibold text-gray-800">Design & Build</span>
      <ul className="md:col-span-2 text-gray-700 list-disc list-inside space-y-1">
  <li>Ultralight foldable design</li>
  <li>Portable and travel-friendly</li>
  <li>Quiet flight system</li>                          
</ul>
    </div>

    {/* Row */}
    <div className="py-3 grid grid-cols-1 md:grid-cols-3 items-center">
      <span className="font-semibold text-gray-800">Intelligent Flight Modes</span>
      <ul className="md:col-span-2 text-gray-700 list-disc list-inside space-y-1">
  <li>Quick-Shots: Dronie, Rocket, Circle, Helix, Boomerang</li>
  <li>Panorama modes</li>
  <li>Auto Leveling</li>
  <li>One-tap takeoff and landing</li>                           
</ul>
    </div>
  </div>
)}


      {/* Description */}
      {activeTab === "desc" && (
        <div className="text-gray-700">
          <p>
            {/* long description placeholder */}
            The DJI Mini 3 is one of the best-value camera drones available in Nepal, offering impressive performance,
             long battery life, and stunning 4K video quality in an ultra-light design. Easy to carry and beginner-friendly,
              it’s ideal for travellers, vloggers, and creators who want premium aerial shots at a great price
          </p>
        </div>
      )}
    </div>
  );
}
