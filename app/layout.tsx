import './globals.css';
import Footer from '../components/footer';
import Header from '../components/header';

export const metadata = {
  title: 'Drone Zone Nepal | Buy, Rent & Learn Drones',
  description: 'Explore high-quality drones, accessories, and FPV gear in Nepal. Buy, rent, or learn to fly with expert training and premium branded drones at the best prices.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    
  return (
    <html lang="en">
      <body className="min-h-screen text-gray-800">
        <Header />
        <main className="max-w-7xl mx-auto p-6 bg-gray-300/75">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
