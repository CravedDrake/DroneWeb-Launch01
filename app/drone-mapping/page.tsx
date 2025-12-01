"use client";
import Image from "next/image";
import { ArrowRightIcon } from "@heroicons/react/24/solid";  // Ensure this matches the correct library and path

export default function DroneMappingPage() {
    const phoneNumber = '9779705275917';
    const learnMessage = encodeURIComponent('Hello, I want to learn Drone Mapping')
  return (
    <main className="w-full bg-white text-gray-800">

      {/* Hero Section */}
      <section className="relative bg-teal-700 text-white py-20 px-6 text-center">
        <div className="absolute inset-0 bg-black/20"></div>

        <div className="relative z-10">
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-wide">
            Drone Mapping in Nepal
          </h1>

          <p className="mt-4 text-lg sm:text-xl max-w-3xl mx-auto text-gray-200">
            Accurate Land Survey, Aerial Photos & 3D Models for Construction, Agriculture and Real Estate.
          </p>
        </div>
      </section>

      {/* Image Section */}
      <section className="relative max-w-lg mx-auto mt-10 px-6">
  <div className="w-full overflow-hidden rounded-xl shadow-lg">
    <Image
      src="/Dronemap.jpg"
      alt="Drone Mapping in Nepal for Accurate Land Survey and Aerial Images"
      width={1200}
      height={200}
      className="rounded-xl object-cover"
    />
  </div>
</section>

      {/* Main Content */}
      <section className="py-16 px-6 max-w-6xl mx-auto space-y-8">
        <p className="text-gray-700 leading-relaxed">
          Drone mapping is becoming one of the most important tools for land
          analysis in Nepal. Our service provides high quality aerial maps, 3D
          models, aerial images and accurate survey data using advanced drones and
          precision sensors.
        </p>

        <p className="text-gray-700 leading-relaxed">
          Whether you are a business, engineer, land owner or construction
          company, we offer reliable and affordable drone mapping solutions that
          save time, reduce costs and deliver better accuracy than traditional
          surveys.
        </p>

        {/* Why Choose Us */}
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
          Why Choose Our Drone Mapping Service
        </h2>

        <ul className="space-y-4 text-gray-700">
          <li><span className="font-semibold">High Precision Data:</span> Modern drones with high-resolution cameras and GPS.</li>
          <li><span className="font-semibold">Fast Delivery:</span> Quick processing of maps and reports.</li>
          <li><span className="font-semibold">Affordable Rates:</span> Pricing suitable for the Nepali market.</li>
          <li><span className="font-semibold">Suitable for All Industries:</span> Construction, agriculture, mining and more.</li>
        </ul>

        {/* What We Offer */}
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mt-10">
          What We Offer
        </h2>

        <ul className="space-y-4 text-gray-700">
          <li><span className="font-semibold">Ortho Mosaic Mapping:</span> High-resolution stitched images with accurate scale.</li>
          <li><span className="font-semibold">3D Modeling:</span> Realistic 3D models of land and buildings.</li>
          <li><span className="font-semibold">Topographic Mapping:</span> Accurate elevation and slope calculation.</li>
          <li><span className="font-semibold">Agricultural Mapping:</span> NDVI crop health analysis and field monitoring.</li>
          <li><span className="font-semibold">Construction Monitoring:</span> Weekly or monthly drone surveys.</li>
          <li><span className="font-semibold">Land Inspection & Measurement:</span> Useful for engineers, buyers, and developers.</li>
        </ul>

        {/* Benefits */}
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mt-10">
          Benefits of Drone Mapping
        </h2>

        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>Saves time compared to manual surveying</li>
          <li>Higher accuracy and better visual data</li>
          <li>Reduces cost for large areas</li>
          <li>Safe for hard-to-reach locations</li>
          <li>Supports better planning and decision making</li>
        </ul>
        {/* CTA Button */}
        <div className="text-center mt-12">
          
        <button
        onClick={() => {
          window.open(
            `https://wa.me/${phoneNumber}?text=${learnMessage}`,
            "_blank"
          );
        }}
        className="inline-flex items-center px-8 py-4 bg-teal-600 hover:bg-teal-800 text-white text-lg font-semibold rounded-xl transition"
        
      >
        Learn to Fly Now
        <ArrowRightIcon className="ml-3 w-6 h-6" />
      </button>
        </div>
      </section>
    </main>
  );
}
