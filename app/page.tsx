'use client';


import { useEffect, useState } from 'react';
import Image from 'next/image';


const banners = [
{
id: 1,
title: 'Mavic Air',
description: 'High-end flight performance and functionality for limitless exploration.',
// using the uploaded design image as a banner sample. In a real site replace with optimized assets.
image: '/mnt/data/DRONIE - UX_UI design.jpg',
},
{ id: 2, title: 'Phantom 3 SE', description: 'Reliable. Precise. Ready.', image: '/mnt/data/DRONIE - UX_UI design.jpg' },
{ id: 3, title: 'Mavic 2 Zoom', description: 'Zoom-capable aerial imaging.', image: '/mnt/data/DRONIE - UX_UI design.jpg' },
{ id: 4, title: 'Explorer Kit', description: 'Everything you need to start flying.', image: '/mnt/data/DRONIE - UX_UI design.jpg' },
];


const products = [
{ id: 1, name: 'Mavic Air', price: '$999', image: '/mnt/data/DRONIE - UX_UI design.jpg', featured: true },
{ id: 2, name: 'Phantom 3 SE', price: '$899', image: '/mnt/data/DRONIE - UX_UI design.jpg', featured: true },
{ id: 3, name: 'Mavic 2 Zoom', price: '$1299', image: '/mnt/data/DRONIE - UX_UI design.jpg' },
{ id: 4, name: 'Starter Accessory Pack', price: '$79', image: '/mnt/data/DRONIE - UX_UI design.jpg' },
{ id: 5, name: 'Spare Propeller Set', price: '$19', image: '/mnt/data/DRONIE - UX_UI design.jpg' },
];

export default function HomePage() {
  return (
  <div className="max-w-6xl mx-auto px-4 py-8">
  <HeroCarousel />
  
  
  <section className="mt-12">
  <h2 className="text-2xl font-semibold mb-6">Featured Products</h2>
  
  
  {/* First show the two large featured products side-by-side on md+ */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
  {products.filter(p => p.featured).map(p => (
  <div key={p.id} className="bg-white shadow rounded-lg overflow-hidden flex flex-col md:flex-row">
  <div className="md:w-1/2 w-full h-56 md:h-auto relative">
  <img src={p.image} alt={p.name} className="object-cover w-full h-full" />
  </div>
  <div className="p-6 flex-1 flex flex-col justify-center">
  <h3 className="text-xl font-bold mb-2">{p.name}</h3>
  <p className="text-gray-600 mb-4">Short description about the model — flight time, camera, ease of use.</p>
  <div className="flex items-center justify-between">
  <div className="text-2xl font-semibold">{p.price}</div>
  <button className="px-4 py-2 bg-black text-white rounded-md">Buy now</button>
  </div>
  </div>
  </div>
  ))}
  </div>
  
  
  {/* Then show the rest as single cards in a responsive grid */}
  <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
  {products.filter(p => !p.featured).map(p => (
  <div key={p.id} className="bg-white border rounded-lg overflow-hidden">
  <div className="h-48 relative">
  <img src={p.image} alt={p.name} className="object-cover w-full h-full" />
  </div>
  <div className="p-4">
  <h4 className="font-semibold mb-1">{p.name}</h4>
  <p className="text-sm text-gray-600 mb-3">{p.price}</p>
  <button className="px-3 py-2 border rounded text-sm">View</button>
  </div>
  </div>
  ))}
  </div>
  </section>
  </div>
  );
  }

  function HeroCarousel() {
    const [index, setIndex] = useState(0);
    
    
    useEffect(() => {
    const t = setInterval(() => setIndex(i => (i + 1) % banners.length), 4000);
    return () => clearInterval(t);
    }, []);
    
    
    return (
    <div className="relative w-full h-80 md:h-96 rounded-xl overflow-hidden shadow">
    {banners.map((b, i) => (
    <div key={b.id} className={`absolute inset-0 transition-opacity duration-700 ${i === index ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}>
    <img src={b.image} alt={b.title} className="w-full h-full object-cover" />
    <div className="absolute left-6 top-8 md:top-16 max-w-xl">
    <h2 className="text-3xl md:text-5xl font-extrabold text-white drop-shadow-md">{b.title}</h2>
    <p className="mt-2 text-sm md:text-base text-white/90 max-w-md">{b.description}</p>
    <div className="mt-4">
    <button className="px-4 py-2 bg-white text-black rounded-md font-semibold">Shop</button>
    </div>
    </div>
    </div>
    ))}
    
    
    {/* controls */}
    <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
    <button onClick={() => setIndex(i => (i - 1 + banners.length) % banners.length)} className="p-2 rounded-full bg-white/80 hover:bg-white">
    ‹
    </button>
    </div>
    <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
    <button onClick={() => setIndex(i => (i + 1) % banners.length)} className="p-2 rounded-full bg-white/80 hover:bg-white">
    ›
    </button>
    </div>
    
    
    {/* dots */}
    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
    {banners.map((_, i) => (
    <button key={i} onClick={() => setIndex(i)} className={`w-2 h-2 rounded-full ${i === index ? 'bg-white' : 'bg-white/50'}`}></button>
    ))}
    </div>
    </div>
    );
    }