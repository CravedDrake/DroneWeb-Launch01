"use client";
import React, { useState, useMemo } from "react";
import Image from "next/image";
import { useRouter } from 'next/navigation';


const products = [
{ id: 1, name: "Propellors ", description: " Propeller | High Lift Efficiency | Low Noise | Balanced Design | Smooth Flight Performance", image: "/propeller_set.jpg" ,
link: '/products/details/dji-mini-4-pro',wMessage: encodeURIComponent('Hello, I want to buy a Propeller Set')
},
{ id: 2, name: "Batteries ", description: "Battery | Long Flight Time | Fast Charging Support | High Efficiency | Reliable Power Output", image: "/battery.jpg",
 link: '/products/details/dji-mini-3',wMessage: encodeURIComponent('Hello, I want to buy Drone Batteries') },
{ id: 3, name: "Charging Hub", description: " Charging Hub | Multi-Battery Support | Smart Charging | Compact Design | Travel Friendly", image: "/charging_hub.jpg" ,
 link: '/products/details/dji-mini-4-pro',wMessage: encodeURIComponent('Hello, I want to buy a Charging Hub')},
{ id: 4, name: "Propellor Guard", description: "Propeller Guard | Full Protection | Lightweight Shielding | Safe Indoor Flying | Easy Installation", image: "/propeller_guard.jpg" ,
 link: '/products/details/dji-mini-4-pro',wMessage: encodeURIComponent('Hello, I want to buy a Propeller Guard')},
{ id: 5, name: "Drone Arms", description: " Drone Arms | High-Strength Build | Lightweight | Perfect Fit Replacement | Durable Performance", image: "/arms.jpg" ,
 link: '/products/details/dji-mini-4-pro',wMessage: encodeURIComponent('Hello, I want to buy Drone Arms')},
{ id: 6, name: "Gimble", description: "Gimbal | 3-Axis Stabilization | Ultra-Smooth Video | Precision Control | Vibration Reduction", image: "/gimble.jpg" ,
 link: '/products/details/dji-mini-4-pro',wMessage: encodeURIComponent('Hello, I want to buy a Gimble')},
{ id: 7, name: "Camera", description: " Camera | 4K UHD Quality | High Dynamic Range | Crystal-Clear Footage | Low-Light Optimized", image: "/camera.jpg" ,
 link: '/products/details/dji-mini-4-pro',wMessage: encodeURIComponent('Hello, I want to buy a Camera')},
{ id: 8, name: "GPS Module", description: " GPS Module | High Accuracy | Fast Satellite Lock | Stable Position Hold | Enhanced Navigation", image: "/gps.jpg" ,
 link: '/products/details/dji-mini-4-pro', wMessage: encodeURIComponent('Hello, I want to buy a GPS Module'),},
 { id: 9, name: "Motherboard", description: " Motherboard | High-Performance Processing | Stable Connectivity | Efficient Circuits | Reliable Control System", image: "/mother_board.jpg" ,
    link: '/products/details/dji-mini-4-pro', wMessage: encodeURIComponent('Hello, I want to buy a Motherboard'),},
{ id: 10, name: "Upper Body", description: " Upper Body Frame | Lightweight Shell | Aerodynamic | High Durability | Premium Build Quality", image: "/upper_body.jpg" ,
        link: '/products/details/dji-mini-4-pro', wMessage: encodeURIComponent('Hello, I want to buy a Upper Body'),},
{ id: 11, name: "Lower body", description: " Lower Body Frame | Strong Structure | Heat-Resistant | Perfect Alignment | Crash-Resistant", image: "/lower_body.jpg" ,
            link: '/products/details/dji-mini-4-pro', wMessage: encodeURIComponent('Hello, I want to buy a Lower Body'),},
];


export default function ProductsPage() {
const [search, setSearch] = useState("");
const [page, setPage] = useState(1);
const ITEMS_PER_PAGE = 4;
const router = useRouter();


const filteredProducts = useMemo(() => {
return products.filter((p) =>
p.name.toLowerCase().includes(search.toLowerCase())
);
}, [search]);


const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);
const phoneNumber = '9779705275917'; // include country code, e.g., 977 for Nepal


const paginatedProducts = useMemo(() => {
const start = (page - 1) * ITEMS_PER_PAGE;
return filteredProducts.slice(start, start + ITEMS_PER_PAGE);
}, [page, filteredProducts]);

return (
    <div className="min-h-screen">
    {/* Search Bar */}
    <div className="mb-6 w-full flex justify-center">
  <div className="relative w-full max-w-md">
    {/* Search Icon */}
    <span className="absolute inset-y-0 left-3 flex items-center text-gray-500">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 text-teal-600"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M12.9 14.32a8 8 0 111.414-1.414l4.387 4.386a1 1 0 01-1.414 1.415l-4.387-4.387zM10 16a6 6 0 100-12 6 6 0 000 12z"
          clipRule="evenodd"
        />
      </svg>
    </span>

    {/* Input Field */}
    <input
      type="text"
      placeholder="Search accessories here..."
      value={search}
      onChange={(e) => {
        setSearch(e.target.value);
        setPage(1);
      }}
      className="w-full pl-10 pr-4 py-3 border-2 border-gray-500 rounded-xl shadow-sm focus:outline-none focus:ring-1 focus:ring-teal-300 focus:border-teal-400 transition"
    />
  </div>
</div>

    
    
    {/* Products List */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
  {paginatedProducts.map((product) => (
    <div
      key={product.id}
      className="bg-white shadow-md rounded-2xl p-4 hover:shadow-lg transition duration-300"
    >
      {/* Image wrapper */}
      <div className="relative w-full h-48 mb-4 rounded-xl overflow-hidden bg-gray-100 flex items-center justify-center">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-contain p-2"
        />
      </div>

      {/* Name */}
      <h2 className="text-sm font-semibold">{product.name}</h2>

      {/* Description */}
      <p className="text-xs text-gray-600 mt-1">{product.description}</p>

      {/* WhatsApp Button */}
      <button
        onClick={() => {
          window.open(
            `https://wa.me/${phoneNumber}?text=${product.wMessage}`,
            "_blank"
          );
        }}
        className="mt-4 w-full px-3 py-2 sm:px-4 sm:py-2 bg-teal-600 text-white text-xs sm:text-sm font-semibold rounded-lg hover:bg-teal-800 transition"
      >
        Buy Now
      </button>
    </div>
  ))}
</div>

    <div className="flex justify-center mt-8 gap-3">
    <button
  disabled={page === 1}
  onClick={() => setPage(page - 1)}
  className={`px-4 py-2 rounded-xl border flex items-center justify-center ${
    page === 1 ? "opacity-40 cursor-not-allowed" : "hover:bg-gray-200"
  }`}
>
  {/* Left arrow SVG */}
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      d="M12.293 16.293a1 1 0 010 1.414l-6-6a1 1 0 010-1.414l6-6a1 1 0 111.414 1.414L8.414 10l5.293 5.293a1 1 0 010 1.414z"
      clipRule="evenodd"
    />
  </svg>
</button>



<span className="px-4 py-2 font-semibold">
Page {page} of {totalPages}
</span>


<button
  disabled={page === totalPages}
  onClick={() => setPage(page + 1)}
  className={`px-4 py-2 rounded-xl border flex items-center justify-center ${
    page === totalPages ? "opacity-40 cursor-not-allowed" : "hover:bg-gray-200"
  }`}
>
  {/* Right arrow SVG */}
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      d="M7.707 3.707a1 1 0 010-1.414l6 6a1 1 0 010 1.414l-6 6a1 1 0 11-1.414-1.414L11.586 10 6.293 4.707a1 1 0 011.414-1.414z"
      clipRule="evenodd"
    />
  </svg>
</button>

</div>
</div>
);
}