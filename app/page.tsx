'use client';


import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';


const banners = [
{
id: 1,
title: 'Buy a Drone',
description: 'High-end flight performance and functionality for limitless exploration.',
// using the uploaded design image as a banner sample. In a real site replace with optimized assets.
image: '/mavi_air.jpg',
},
{ id: 2, title: 'Rent a Drone', description: 'Reliable. Precise. Ready.', image: '/phantom 3 se.jpg' },
{ id: 3, title: 'Accessories', description: 'Zoom-capable aerial imaging.', image: '/accessories.jpeg' },
{ id: 4, title: 'Learn to FLy', description: 'Everything you need to start flying.', image: '/Learn.jpeg' },
];


const products = [
{ id: 1, name: 'DJI Mini 4 Pro',  image: '/dji_mini_4_01.jpeg', description:'4K/60FPS video, 48MP photos, 34-min flight, 249g, obstacle sensing, and intelligent flight modes.', featured: true },
{ id: 2, name: 'DJI Mini 3', image: '/dji_mini_3_01.jpg', description:'4K video, 12MP photos, 34-min flight, 249g, compact and easy to fly.', featured: true },
{ id: 3, name: 'Camera',  image: '/Camera.jpg'},
{ id: 4, name: 'Battery', image: '/Battery.jpg'},
{ id: 5, name: 'Propeller Guard', image: '/Propeller Guard.jpg'},
];

export default function HomePage() {
  const router = useRouter();

  return (
  <div className="max-w-6xl mx-auto px-4 py-2">
  <HeroCarousel banners={banners} />
  
  
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
  <p className="text-gray-600 mb-4">{p.description}</p>
  <div className="flex items-center justify-between">
  {/* <div className="text-2xl font-semibold">{p.price}</div> */}
  <button 
  onClick={() => router.push('/products/details/dji-mini-4-pro')}
  className="px-4 py-2 bg-teal-600 text-white rounded-md">Learn More</button>
  </div>
  </div>
  </div>
  ))}
  </div>
  
  
  {/* Then show the rest as single cards in a responsive grid */}
  <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
  {products.filter(p => !p.featured).map(p => (
    <div key={p.id} className="bg-white border rounded-lg overflow-hidden">
      <div className="h-48 w-full relative flex items-center justify-center bg-gray-100">
        <img 
          src={p.image} 
          alt={p.name} 
          className="object-contain w-full h-full p-2" 
        />
      </div>
      <div className="p-4">
        <h4 className="font-semibold mb-1">{p.name}</h4>
        {/* <p className="text-sm text-gray-600 mb-3">{p.price}</p> */}
        <button className="px-3 py-2 border rounded-xl text-sm text-white bg-teal-600">
          View
        </button>
      </div>
    </div>
  ))}
</div>
  </section>
  </div>
  );
  }

  function HeroCarousel({ banners }: { banners: { id: number; image: string; title: string; description: string }[] }) {
    const [index, setIndex] = useState(0);
  
    useEffect(() => {
      const t = setInterval(() => setIndex(i => (i + 1) % banners.length), 4000);
      return () => clearInterval(t);
    }, [banners.length]);
  
    if (!banners || banners.length === 0) return null;
  
    return (
      <div className="relative w-full 
  min-h-[350px]       /* bigger height on mobile */ 
  md:min-h-0 md:h-[300px]   /* smaller height on md */ 
  lg:h-[280px]        /* even smaller on large screens */
  rounded-xl overflow-hidden shadow-lg mx-auto group bg-gray-100">



  {banners.map((b, i) => (
    <div
      key={b.id}
      className={`absolute inset-0 transition-opacity duration-700 
      flex flex-col-reverse md:flex-row items-center justify-between 
      p-4 md:p-10
      ${i === index ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
    >
      {/* LEFT — TEXT BLOCK (NOW SMALLER ON MOBILE) */}
      <div className="bg-white/80 backdrop-blur-md rounded-xl p-4 md:p-8 shadow-xl w-full md:w-auto max-w-md">
        <h2 className="text-lg sm:text-xl md:text-4xl font-extrabold text-gray-900 leading-tight">
          {b.title}
        </h2>

        <p className="mt-2 text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed">
          {b.description}
        </p>

        <button className="mt-4 px-3 py-2 sm:px-4 sm:py-2 bg-teal-600 text-white text-xs sm:text-sm font-semibold rounded-lg hover:bg-teal-800 transition">
          Shop Now
        </button>
      </div>

      {/* RIGHT — IMAGE (NO CROPPING) */}
      <div className="w-full flex justify-center mb-2 md:mb-0">
        <img
          src={b.image}
          alt={b.title}
          className="w-full max-w-[260px] sm:max-w-[300px] md:max-w-sm object-contain rounded-xl drop-shadow-lg"
        />
      </div>
    </div>
  ))}

  {/* ARROWS */}
  <div className="absolute inset-y-0 left-0 flex items-center z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
    <button
      onClick={() => setIndex(i => (i - 1 + banners.length) % banners.length)}
      className="ml-2 p-2 rounded-full bg-black/60 hover:bg-black text-white shadow-lg transition text-xl"
    >
      ‹
    </button>
  </div>

  <div className="absolute inset-y-0 right-0 flex items-center z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
    <button
      onClick={() => setIndex(i => (i + 1) % banners.length)}
      className="mr-2 p-2 rounded-full bg-black/60 hover:bg-black text-white shadow-lg transition text-xl"
    >
      ›
    </button>
  </div>

  {/* DOTS */}
  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
    {banners.map((_, i) => (
      <button
        key={i}
        onClick={() => setIndex(i)}
        className={`w-3 h-3 rounded-full ${i === index ? 'bg-white' : 'bg-white/50'}`}
      ></button>
    ))}
  </div>
</div>


    );
  }
  