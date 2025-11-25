
import './globals.css';
import Link from 'next/link';
import Image from 'next/image';
import FacilitiesMenu from '@/components/facilitiesMenu';
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


function Header() {
return (
<header className="w-full border-b border-gray-200">
  <div className="max-w-6xl mx-auto px-4 py-5 flex items-center">
    {/* left: logo */}
    <div className="flex items-center flex-1 md:flex-none">
      <Link href="/" className="flex items-center gap-3">
        {/* using the uploaded image path as the logo source */}
        <img
          src="/mnt/data/DRONIE - UX_UI design.jpg"
          alt="Dronie Logo"
          className="h-8 w-auto object-contain rounded-sm"
        />
      </Link>
    </div>
{/* center: nav (centered on larger screens) */}
<nav className="hidden md:flex flex-1 justify-center gap-10">
{[
{ href: '/products', label: 'Products' },
{ href: '/blog', label: 'Blog' },
{ href: '/contact', label: 'Contact' },
{ href: '/about', label: 'About' },
].map((item) => (
<Link
  key={item.href}
  href={item.href}
  className="no-underline text-gray-700 text-sm md:text-base font-medium hover:font-semibold transition-all"
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


function Footer() {
return (
<footer className="w-full border-t border-gray-100 mt-12">
<div className="max-w-6xl mx-auto px-4 py-6 text-sm text-gray-500">© {new Date().getFullYear()} Dronie. All rights reserved.</div>
</footer>
);
}

