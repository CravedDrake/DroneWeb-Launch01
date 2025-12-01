'use client';
import Link from 'next/link';
import FacilitiesMenu from './facilitiesMenu';

export default function Header() {
    return (
        <header className="w-ful bg-white text-gray-700 shadow-md">
          <div className="max-w-6xl mx-auto px-6 py-4 flex items-center">
            {/* left: logo */}
            <div className="flex items-center flex-1 md:flex-none">
          <Link href="/" className="flex items-center gap-3">
            <img
              src="/drone_zone.png"
              alt="Drone Zone Logo"
              className="h-8 w-8 object-cover rounded-full scale-200"
            />
          </Link>
        </div>
            {/* center: nav (centered on larger screens) */}
            <nav className="flex flex-1 justify-center gap-3 md:gap-12 text-xs md:text-base">
          {[
            { href: '/', label: 'Home' },
            { href: '/products', label: 'Products' },
            { href: '/drone-mapping', label: 'DroneMapping' },
            { href: '/about-us', label: 'About' },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="no-underline text-teal-600 font-medium hover:text-teal-800 hover:font-semibold hover:underline transition-all"
            >
              {item.label}
            </Link>
          ))}
        </nav>
            {/* right: hamburger / dropdown */}
            <div className="flex items-center justify-end flex-1 md:flex-none">
              <FacilitiesMenu />
            </div>
          </div>
        </header>
        );
}