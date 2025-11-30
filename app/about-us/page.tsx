import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/solid";

export default function AboutPage() {
  return (
    <main className="w-full bg-white text-gray-800">
      {/* Hero Section */}
      <section className="bg-teal-600 text-white py-20 px-6 text-center">
        <h1 className="text-3xl sm:text-5xl font-bold leading-tight">
          About Us
        </h1>
        <p className="mt-4 text-lg sm:text-xl max-w-3xl mx-auto text-gray-200">
          Your trusted drone service provider in Nepal – sales, rental, training, repair, and accessories all in one place.
        </p>
      </section>

      {/* About Us Content */}
      <section className="py-16 px-6 max-w-6xl mx-auto space-y-8">
        <p className="text-gray-700 leading-relaxed">
          We are a growing drone service provider in Nepal, offering drone sales,
          drone rental, drone training, drone repair, and drone accessories all in
          one place. Our business began 2 years ago by buying, selling, and renting
          second-hand drones through online marketplaces. As our customer base
          expanded across Nepal, we upgraded our services to meet the rising demand
          for high-quality and affordable drones.
        </p>

        <p className="text-gray-700 leading-relaxed">
          Today, we supply first-hand branded drones in Nepal, high-quality
          second-hand drones, and a complete range of premium drone accessories
          for creators, businesses, and hobbyists. Whether you need a professional
          drone for aerial photography, mapping, events, agriculture, or personal
          projects, we offer reliable options at competitive prices.
        </p>

        <p className="text-gray-700 leading-relaxed">
          We also run one of the most trusted Drone Training Courses in Nepal,
          helping beginners and advanced learners develop real flying skills with
          both FPV and standard drones. Alongside training, our Drone Repairing
          Centre in Kathmandu provides expert diagnostics, original spare parts,
          and fast repair services for all major drone brands.
        </p>

        <p className="text-gray-700 leading-relaxed">
          Our goal is to make it easier for people in Nepal to buy drones, rent
          drones, learn drone flying, and repair drones with confidence. We are
          committed to providing trusted service, transparent pricing, and
          high-quality products for every drone enthusiast.
        </p>

        <p className="text-gray-700 leading-relaxed">
          Currently we are also associated with <span className="font-semibold">Advance College of Engineering</span>.
        </p>
      </section>

      {/* Contact Section */}
      <section className="bg-gray-100 py-16 px-6">
        <div className="max-w-6xl mx-auto text-center space-y-6">
          <h2 className="text-3xl font-bold text-gray-800">Contact Us</h2>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mt-6">
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=np.dronezone@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-teal-600 hover:underline"
            >
              <EnvelopeIcon className="w-5 h-5" />
              np.dronezone@gmail.com
            </a>

            <div className="flex flex-col sm:flex-row items-center gap-4 text-gray-700">
              <PhoneIcon className="w-5 h-5 text-teal-600" />
              <span>+977 9808703134</span>
              <span>+977 9869153337</span>
              <span>+977 9705275917</span>
            </div>
          </div>

          {/* Social Media */}
          <div className="flex justify-center gap-6 mt-6">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-600 hover:text-teal-800 font-semibold"
            >
              Facebook
            </a>
            <a
              href="https://www.instagram.com/dronezone_np?utm_source=qr&igsh=MTJjNGZrY3B0ZmY0bQ=="
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-600 hover:text-teal-800 font-semibold"
            >
              Instagram
            </a>
            <a
              href="https://vm.tiktok.com/ZSHTa4eKFEhH4-Kruoe/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-600 hover:text-teal-800 font-semibold"
            >
              TikTok
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-600 hover:text-teal-800 font-semibold"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
