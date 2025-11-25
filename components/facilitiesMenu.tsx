"use client";

import { useState, useEffect, useRef } from "react";

export default function FacilitiesMenu() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function onDoc(e: MouseEvent) {
      if (!ref.current) return;
      if (!(e.target instanceof Node)) return;
      if (!ref.current.contains(e.target)) setOpen(false);
    }
    document.addEventListener("click", onDoc);
    return () => document.removeEventListener("click", onDoc);
  }, []);

  return (
    <div className="relative" ref={ref}>
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

      {open && (
        <div className="absolute right-0 mt-3 w-56 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
          <ul className="p-2">
            <li className="px-3 py-2 rounded hover:bg-gray-50">
              <a href="#buy" className="block text-sm font-medium">
                Buy a drone
              </a>
            </li>
            <li className="px-3 py-2 rounded hover:bg-gray-50">
              <a href="#rent" className="block text-sm font-medium">
                Rent a drone
              </a>
            </li>
            <li className="px-3 py-2 rounded hover:bg-gray-50">
              <a href="#accessories" className="block text-sm font-medium">
                Buy accessories
              </a>
            </li>
            <li className="px-3 py-2 rounded hover:bg-gray-50">
              <a href="#learn" className="block text-sm font-medium">
                Learn to fly
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
