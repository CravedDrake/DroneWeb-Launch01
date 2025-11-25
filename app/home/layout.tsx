
import '../globals.css';
import Header from '../../components/header';
export const metadata = {
  title: 'Dronie — Home',
  description: 'Drone shop - homepage',
  };

export default function RootLayout({ children }: { children: React.ReactNode }) {
return (
<html lang="en">
<body className="antialiased bg-white text-gray-800">
<Header />
<div className="min-h-screen">{children}</div>
<Footer />
</body>
</html>
);
}





function Footer() {
return (
<footer className="w-full border-t border-gray-200 mt-8 bg-white">
  <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-5 gap-10">

    {/* Logo + small info */}
    <div>
      <div className="flex items-center gap-3 mb-4">
        <img
          src="/drone_zone_logo.jpeg"
          alt="Dronie Logo"
          className="h-12 w-12 object-cover rounded-full"
        />
        <span className="text-lg font-semibold text-gray-800">Drone Zone</span>
      </div>
      <p className="text-gray-500 text-sm leading-relaxed">
        Your trusted source for drones, accessories, and aerial solutions.
      </p>
    </div>

    {/* Quick Links */}
    <div>
      <h4 className="text-gray-900 font-semibold mb-3">Quick Links</h4>
      <ul className="space-y-2 text-sm text-gray-600">
        <li><a href="/products" className="hover:text-black">Products</a></li>
        <li><a href="/blog" className="hover:text-black">Blog</a></li>
        <li><a href="/about" className="hover:text-black">About</a></li>
        <li><a href="/contact" className="hover:text-black">Contact</a></li>
      </ul>
    </div>

    {/* Support */}
    <div>
      <h4 className="text-gray-900 font-semibold mb-3">Support</h4>
      <ul className="space-y-2 text-sm text-gray-600">
        <li><a href="#" className="hover:text-black">Help Center</a></li>
      </ul>
    </div>

    {/* Contact */}
    <div>
      <h4 className="text-gray-900 font-semibold mb-3">Contact</h4>
      <ul className="space-y-2 text-sm text-gray-600">
        <li className='flex'>Email: <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=np.dronezone@gmail.com"
          target="_blank"
          className="hover:text-black ml-2"
        >
          np.dronezone@gmail.com
        </a>
        </li>
        <li className="flex flex-col">
          <span className="font-medium">Phone: <a href="tel:+9779808703134" className="hover:text-black">+977 9808703134</a></span>
          <a href="tel:+9779869153337" className="hover:text-black ml-12">+977 9869153337</a>
        </li>
        <li>Address: Kathmandu, Nepal</li>
      </ul>
    </div>

    {/* Follow Us */}
    <div>
      <h4 className="text-gray-900 font-semibold mb-3">Follow Us</h4>
      <div className="flex flex-col gap-1 text-gray-600">
        <a
          href="https://www.facebook.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:text-black"
        >
          <i className="ri-facebook-fill"></i>
          <span>Facebook</span>
        </a>
        <a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:text-black"
        >
          <i className="ri-instagram-line"></i>
          <span>Instagram</span>
        </a>
        <a
          href="https://www.youtube.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:text-black"
        >
          <i className="ri-youtube-fill"></i>
          <span>YouTube</span>
        </a>
      </div>
    </div>

  </div>

  {/* Bottom */}
  <div className="border-t border-gray-100">
    <div className="max-w-6xl mx-auto px-6 py-4 text-sm text-gray-500 text-center">
      © {new Date().getFullYear()} Drone Zone. All rights reserved.
    </div>
  </div>
</footer>

);
}

