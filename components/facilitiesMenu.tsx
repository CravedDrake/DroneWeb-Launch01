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
        className="p-2 rounded-md hover:bg-teal-100 transition"
      >
        <div className="space-y-1">
          <span className="block w-6 h-0.5 bg-teal-600" />
          <span className="block w-6 h-0.5 bg-teal-600" />
          <span className="block w-6 h-0.5 bg-teal-600" />
        </div>
      </button>

      {/* Mega menu */}
      {open && (
        <div className="absolute right-0 mt-3 w-50 md:w-60 bg-white border border-gray-200 rounded-lg shadow-lg z-50 p-4 md:p-6 max-h-[80vh] overflow-y-auto">
          {/* Centering content and text-right */}
          <div className="flex justify-end">
            <div className="">
              {/* Column 2 */}
              <div>
              <Link href={'/products'} className="text-base md:text-lg font-semibold mb-2 hover:underline">Buy & Rent a Drone</Link>
              </div>
              {/* Column 3 */}
              <div>
              <Link href={'/accessories'} className="text-base md:text-lg font-semibold mb-2 hover:underline">Accesories</Link>
              </div>
              {/* Column 4 */}
              <div>
              <Link href={'/learn-to-fly'} className="text-base md:text-lg font-semibold mb-2 hover:underline">Learn To Fly</Link>
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