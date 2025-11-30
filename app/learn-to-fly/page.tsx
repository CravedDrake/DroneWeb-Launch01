"use client";
import { ArrowRightIcon } from "@heroicons/react/24/solid"; // install @heroicons/react first

export default function LearnToFlyPage() {
    const phoneNumber = '9779705275917';
    const learnMessage = encodeURIComponent('Hello, I want to learn how to fly drones.')
  return (
    <main className="w-full bg-white text-gray-800">

      {/* Hero */}
      <section className="bg-gray-900 text-white py-20 px-6 text-center">
        <h1 className="text-3xl sm:text-5xl font-bold leading-tight">
          Learn to Fly Drones – Master FPV & Standard Drones in Nepal
        </h1>

        <p className="mt-4 text-lg sm:text-xl max-w-3xl mx-auto text-gray-300">
          Take your drone skills to the next level with our expert-led training
          programs across Nepal.
        </p>

       
        <button
        onClick={() => {
          window.open(
            `https://wa.me/${phoneNumber}?text=${learnMessage}`,
            "_blank"
          );
        }}
        className="mt-5 inline-flex items-center px-8 py-4 bg-teal-600 hover:bg-teal-800 text-white text-lg font-semibold rounded-xl transition"
      >
        Learn to Fly Now
        <ArrowRightIcon className="ml-3 w-6 h-6" />
      </button>
            
          
      </section>

      {/* Details */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">

          {/* Left */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              Drone Flying Courses We Offer
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Whether you're interested in FPV drones or standard camera drones,
              our instructors guide you from basics to advanced maneuvers.
            </p>

            <ul className="mt-6 space-y-4 text-gray-700">
              <li className="border-l-4 border-teal-600 pl-4">
                Beginner lessons: Safe take-offs, landings & basic controls.
              </li>
              <li className="border-l-4 border-teal-600 pl-4">
                Intermediate training: Hovering, turns & smooth navigation.
              </li>
              <li className="border-l-4 border-teal-600 pl-4">
                Advanced FPV: Obstacle navigation & high-speed racing skills.
              </li>
            </ul>
          </div>

          {/* Right */}
          <div className="bg-gray-100 p-6 rounded-2xl shadow-sm">
            <h2 className="text-2xl font-bold mb-4">Why Choose Us?</h2>
            <ul className="space-y-3 text-gray-700">
              <li>✔ Learn FPV & standard drones</li>
              <li>✔ Small class sizes</li>
              <li>✔ Experienced instructors</li>
              <li>✔ Safe & controlled training areas</li>
              <li>✔ Opportunity for certification</li>
            </ul>
          </div>
        </div>

        {/* Bottom text */}
        <p className="mt-10 text-gray-700 text-lg leading-relaxed max-w-3xl">
          With hands-on sessions, modern drones, and personalized guidance,
          you’ll gain the confidence to fly safely and professionally.
        </p>

        <p className="mt-4 text-gray-700 text-lg">
          Join our training courses in Kathmandu and across Nepal and start
          flying like a pro!
        </p>

        {/* Final CTA */}
        <div className="text-center mt-12">
          
        <button
        onClick={() => {
          window.open(
            `https://wa.me/${phoneNumber}?text=${learnMessage}`,
            "_blank"
          );
        }}
        className="inline-flex items-center px-8 py-4 bg-teal-600 hover:bg-teal-800 text-white text-lg font-semibold rounded-xl transition"
        
      >
        Learn to Fly Now
        <ArrowRightIcon className="ml-3 w-6 h-6" />
      </button>
            
          
        </div>
      </section>
    </main>
  );
}
