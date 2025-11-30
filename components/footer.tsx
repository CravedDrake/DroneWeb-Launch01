'use client';
import { usePathname } from 'next/navigation';

export default function Footer() {
  const pathname = usePathname();
  if (pathname !== '/') return null; // show only on homepage

  return (
    <footer className="w-full border-t border-gray-200 bg-white">
    <div className="max-w-6xl mx-auto px-4 py-5 grid grid-cols-1 md:grid-cols-4 gap-8">

      {/* Logo + Info */}
      <div>
        <div className="flex items-center gap-3 mb-4">
          <img
            src="/drone_zone_logo.jpeg"
            alt="Drone Zone Logo"
            className="h-12 w-12 object-cover rounded-full"
          />
          <span className="text-lg font-semibold text-gray-800">Drone Zone</span>
        </div>
        <p className="text-gray-500 text-xs leading-relaxed">
          Your trusted source for drones, accessories, and aerial solutions.
        </p>
      </div>

      {/* Quick Links */}
      <div>
        <h4 className="text-gray-900 font-semibold mb-3">Quick Links</h4>
        <ul className="space-y-2 text-xs text-gray-600">
          <li><a href="/products" className="hover:text-black">Products</a></li>
          <li><a href="/about-us" className="hover:text-black">About</a></li>
        </ul>
      </div>

    {/* Contact */}
    <div>
      <h4 className="text-gray-900 font-semibold mb-3">Contact</h4>
      <ul className="space-y-2 text-xs text-gray-600">
        <li className='flex'>
          Email:
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=np.dronezone@gmail.com"
            target="_blank"
            className="hover:text-black ml-2"
          >
            np.dronezone@gmail.com
          </a>
        </li>

        <li className="flex flex-col">
          <span className="font-medium">
            Phone: <a href="tel:+9779808703134" className="hover:text-black">+977 9808703134</a>
          </span>
          <a href="tel:+9779869153337" className="hover:text-black ml-12">
            +977 9869153337
          </a>
        </li>
        <li>Address: Kathmandu, Nepal</li>
      </ul>
    </div>
{/* Social */}
<div >
      <h4 className="text-gray-900 font-semibold mb-3">Follow Us</h4>
      <div className="flex flex-col gap-1 text-xs text-gray-600">
      <a href="https://www.facebook.com/" target="_blank" className="flex items-center gap-2 hover:text-black">
          <i className="ri-youtube-fill"></i>
          <span>Facebook</span>
        </a>
        <a href="https://www.instagram.com/dronezone_np?utm_source=qr&igsh=MTJjNGZrY3B0ZmY0bQ==" target="_blank" className="flex items-center gap-2 hover:text-black">
          <i className="ri-instagram-line"></i>
          <span>Instagram</span>
        </a>
        <a href="https://vm.tiktok.com/ZSHTa4eKFEhH4-Kruoe/" target="_blank" className="flex items-center gap-2 hover:text-black">
          <i className="ri-youtube-fill"></i>
          <span>Tik Tok</span>
        </a>
      </div>
    </div>
  </div>
</footer>
);
}  

