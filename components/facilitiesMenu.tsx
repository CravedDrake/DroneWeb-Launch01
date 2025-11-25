"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

export default function FacilitiesMenu() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  // Close menu when clicking outside
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (!ref.current) return;
      if (!(e.target instanceof Node)) return;
      if (!ref.current.contains(e.target)) setOpen(false);
    }

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={ref}>
      {/* Hamburger button */}
      <button
        aria-label="menu"
        onClick={() => setOpen((s) => !s)}
        className="p-2 rounded-md hover:bg-gray-100 transition"
      >
        <div className="space-y-1">
          <span className="block w-6 h-0.5 bg-gray-800" />
          <span className="block w-6 h-0.5 bg-gray-800" />
          <span className="block w-6 h-0.5 bg-gray-800" />
        </div>
      </button>

      {/* Mega menu */}
      {open && (
        <div className="absolute right-0 mt-3 w-40 md:w-75 bg-white border border-gray-200 rounded-lg shadow-lg z-50 p-4 md:p-6 max-h-[80vh] overflow-y-auto">
          {/* Centering content and text-right */}
          <div className="flex justify-end">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:grid-cols-2 md:gap-6 text-right">
              {/* Column 1 */}
              <div>
                <h3 className="text-base md:text-lg font-semibold mb-2">Buy a Drone</h3>
                <ul>
                  <li className="py-1 hover:text-blue-600">
                    <Link href="#quadcopter">Quadcopters</Link>
                  </li>
                  <li className="py-1 hover:text-blue-600">
                    <Link href="#fixedwing">Fixed Wing</Link>
                  </li>
                  <li className="py-1 hover:text-blue-600">
                    <Link href="#racing">Racing Drones</Link>
                  </li>
                </ul>
              </div>

              {/* Column 2 */}
              <div>
                <h3 className="text-base md:text-lg font-semibold mb-2">Rent a Drone</h3>
                <ul>
                  <li className="py-1 hover:text-blue-600">
                    <Link href="#daily">Daily Rent</Link>
                  </li>
                  <li className="py-1 hover:text-blue-600">
                    <Link href="#weekly">Weekly Rent</Link>
                  </li>
                  <li className="py-1 hover:text-blue-600">
                    <Link href="#monthly">Monthly Rent</Link>
                  </li>
                </ul>
              </div>
              {/* Column 3 */}
              <div>
                <h3 className="text-base md:text-lg font-semibold mb-2">Accessories</h3>
                <ul>
                  <li className="py-1 hover:text-blue-600">
                    <Link href="#batteries">Batteries</Link>
                  </li>
                  <li className="py-1 hover:text-blue-600">
                    <Link href="#propellers">Propellers</Link>
                  </li>
                  <li className="py-1 hover:text-blue-600">
                    <Link href="#cases">Cases & Bags</Link>
                  </li>
                </ul>
              </div>

              {/* Column 4 */}
              <div>
                <h3 className="text-base md:text-lg font-semibold mb-2">Learn</h3>
                <ul>
                  <li className="py-1 hover:text-blue-600">
                    <Link href="#tutorials">Tutorials</Link>
                  </li>
                  <li className="py-1 hover:text-blue-600">
                    <Link href="#guides">Guides</Link>
                  </li>
                  <li className="py-1 hover:text-blue-600">
                    <Link href="#courses">Courses</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Optional bottom banner */}
          {/* <div className="mt-4 md:mt-6">
            <img
              src="/mnt/data/DRONIE-banner.jpg"
              alt="Dronie Promo"
              className="w-full h-32 md:h-40 object-cover rounded-lg"
            />
          </div> */}
        </div>
      )}
    </div>
  );
}