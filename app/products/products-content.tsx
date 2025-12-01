"use client";
import { useState, useMemo } from "react";
import Image from "next/image";
import { useRouter } from 'next/navigation';
import { useSearchParams } from "next/navigation";
import {  useEffect } from "react";

const products = [
{ id: 1, name: "DJI Mini 4 Pro – 4K UHD Camera | 60FPS | 48MP Photos | 34-min Flight Time | 249g Ultra-Light", image: "/dji_mini_4_03.jpeg" , link: '/products/details/dji-mini-4-pro'},
{ id: 2, name: "DJI Mini 3 – 4K UHD Camera | 30FPS | 12MP Photos | 34-min Flight Time | 249g Ultra-Light |", image: "/dji_mini_3_01.jpg", link: '/products/details/dji-mini-3' },
{ id: 3, name: "Accessories – Camera | arms | batery | charging hub | gimble | gps | propeller | propeller guard", image: "/accessories.jpeg" , link: '/accessories'}
];

export default function ProductsPage() {
const ITEMS_PER_PAGE = 4;
const router = useRouter();
const searchParams = useSearchParams();
  const initialQuery = searchParams.get("q") || ""; // read query param 'q'

  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

const filteredProducts = useMemo(() => {
return products.filter((p) =>
p.name.toLowerCase().includes(search.toLowerCase())
);
}, [search]);
const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);
const paginatedProducts = useMemo(() => {
const start = (page - 1) * ITEMS_PER_PAGE;
return filteredProducts.slice(start, start + ITEMS_PER_PAGE);
}, [page, filteredProducts]);

  useEffect(() => {
    if (initialQuery) setSearch(initialQuery); // pre-fill search bar
  }, [initialQuery]);

return (
    <div className="min-h-screen">
    {/* Search Bar */}
    <div className="p-6 max-w-6xl mx-auto">
      
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
            placeholder="Search products..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setPage(1); // reset pagination on new search
            }}
            className="w-full pl-10 pr-4 py-3 border-2 border-gray-500 rounded-xl shadow-sm focus:outline-none focus:ring-1 focus:ring-teal-300 focus:border-teal-400 transition"
          />
        </div>
      </div>

      {/* Accessories list can go here */}
    </div>
  
    {/* Products List */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
    {paginatedProducts.map((product) => (
    <div
    key={product.id}
    className="bg-white shadow-md rounded-2xl p-4 hover:shadow-lg transition duration-300"
    >
    <div className="relative w-full h-48 mb-4 rounded-xl overflow-hidden">
    <Image
    src={product.image}
    alt={product.name}
    fill
    className="object-cover"
    />
    </div>
    
    <h2 className="text-sm ">{product.name}</h2>
    
    <button
      onClick={() => router.push(product.link)}
      className="mt-4 w-full bg-teal-700 text-white py-2 rounded-xl hover:bg-teal-800 transition"
    >
      View Details
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