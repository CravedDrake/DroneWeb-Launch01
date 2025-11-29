"use client";
import React, { useState } from "react";

export default function Page() {
  const images = [
    "/dji_mini_4_01.jpeg",
    "/dji_mini_4_02.jpeg",
    "/dji_mini_4_03.jpeg",
  ];

  const videos = ["/dji_mini_4_video.mp4"]; // placeholders

  const [selectedMedia, setSelectedMedia] = useState(images[0]);
  const [activeTab, setActiveTab] = useState("specs");
  const phoneNumber = '9779705275917'; // include country code, e.g., 977 for Nepal
  const buyMessage = encodeURIComponent('Hello, Can I get for info of DJI Mini 4 Pro to purchase it?');
  const rentMessage = encodeURIComponent('Hello, How much is the cost to rent DJI Mini 4 Pro?');

  return (
    <div className="w-full space-y-6">
    <h1 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-wide text-center">
DJI Mini 4 Pro
</h1>


    {/* Media Section */}
    <div className="grid grid-cols-1 md:grid-cols-12 gap-x-7">
{/* Left thumbnails */}
<div className="ml-8 md:col-span-2 flex flex-row md:flex-col gap-1 justify-start overflow-x-auto">
  {images.map((img, i) => (
    <div
      key={i}
      className="w-15 h-15 md:w-13 aspect-square shrink-0 relative flex items-center justify-center bg-white border border-teal-600 rounded-lg cursor-pointer hover:scale-105 transition"
      onClick={() => setSelectedMedia(img)}
    >
      <img
        src={img}
        className="w-full h-full object-cover rounded-md"
        alt={`thumbnail-${i}`}
      />
    </div>
  ))}

  {videos.map((vid, i) => (
    <div
      key={i}
      className="w-15 md:w-13 aspect-square shrink-0 relative flex items-center justify-center bg-black border border-teal-600 rounded-lg cursor-pointer hover:scale-105 transition"
      onClick={() => setSelectedMedia(vid)}
    >
      <video
        src={vid}
        className="w-full h-full object-cover rounded-md"
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
<div className="mt-5 mb-5 md:col-span-6 border-2 border-slate-700 rounded-xl overflow-hidden aspect-video">
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
  DJI Mini 4 Pro – 4K UHD Camera | 60FPS | 48MP Photos | 34-min Flight Time | 
  249g Ultra-Light | 3-Axis Gimbal | GPS & Obstacle Sensing | HDR Video |
  Panorama Mode | QuickShot Modes | Remote Controller Included 
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
<li>4K/60fps HDR video</li>
<li>48MP photo capability</li>
<li>1/1.3-inch CMOS sensor</li>
<li>Dual native ISO for improved low-light quality</li>
<li>True Vertical Shooting for social media content</li>                           
</ul>

  </div>

  {/* Row */}
  <div className="py-3 grid grid-cols-1 md:grid-cols-3 items-center">
    <span className="font-semibold text-gray-800">Flight Time</span>
    <ul className="md:col-span-2 text-gray-700 list-disc list-inside space-y-1">
<li>Up to 34 minutes of flight time</li>
<li>Enhanced wind resistance</li>
<li>Smooth, stable hovering</li>
<li>Intelligent Return-to-Home</li>                           
</ul>
  </div>

  {/* Row */}
  <div className="py-3 grid grid-cols-1 md:grid-cols-3 items-center">
    <span className="font-semibold text-gray-800">Obstacle Avoidance</span>
    <ul className="md:col-span-2 text-gray-700 list-disc list-inside space-y-1">
<li>Omnidirectional obstacle sensing</li>
<li>APAS (Advanced Pilot Assistance Systems)</li>
<li>Precise hovering sensors</li>
<li>Precise hovering sensors</li>                           
</ul>
  </div>

  {/* Row */}
  <div className="py-3 grid grid-cols-1 md:grid-cols-3 items-center">
    <span className="font-semibold text-gray-800">Transmission</span>
    <ul className="md:col-span-2 text-gray-700 list-disc list-inside space-y-1">
<li>DJI O4 video transmission up to 20 km</li>
<li>Low-latency 1080p/60fps live feed</li>
<li>Responsive and stable remote control</li>                          
</ul>
  </div>

  {/* Row */}
  <div className="py-3 grid grid-cols-1 md:grid-cols-3 items-center">
    <span className="font-semibold text-gray-800">Weight</span>
    <ul className="md:col-span-2 text-gray-700 list-disc list-inside space-y-1">
<li>Ultralight and foldable design</li>
<li>Under 249g for easier travel</li>
<li>Portable and easy to carry anywhere</li>                          
</ul>
  </div>

  {/* Row */}
  <div className="py-3 grid grid-cols-1 md:grid-cols-3 items-center">
    <span className="font-semibold text-gray-800">Intelligent Flight Modes</span>
    <ul className="md:col-span-2 text-gray-700 list-disc list-inside space-y-1">
<li>ActiveTrack 360°</li>
<li>MasterShots</li>
<li>QuickShots (Dronie, Circle, Helix, Rocket)</li>
<li>Hyperlapse modes</li>                           
</ul>
  </div>
</div>
)}


    {/* Description */}
    {activeTab === "desc" && (
      <div className="text-gray-700">
        <p>
          {/* long description placeholder */}
          The DJI Mini 4 Pro is the perfect choice for anyone looking to upgrade their aerial filming experience with premium performance at a more affordable price. 
          Compact, powerful, and easy to fly, this drone delivers professional-quality results while remaining lightweight and convenient for everyday use.
        </p>
      </div>
    )}
  </div>
);
}