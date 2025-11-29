
import './globals.css';
import Footer from '../components/footer';
import Header from '../components/header';

export const metadata = {
  title: 'Drone Zone',
  description: 'Drone shop - homepage',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-gray-800">
        <Header />

        <main className="max-w-7xl mx-auto p-6">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
