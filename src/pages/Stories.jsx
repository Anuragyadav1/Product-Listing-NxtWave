import React from "react";

export default function Stories() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Our Stories</h1>
          <p className="text-xl text-gray-600">
            Discover the journey behind our products and the people who make
            them
          </p>
        </div>

        <div className="space-y-12">
          {/* Story 1 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6 md:p-8">
              <h2 className="text-2xl font-semibold mb-4">The Beginning</h2>
              <p className="text-gray-600 mb-4">
                Our journey started in a small workshop where passion met
                craftsmanship. What began as a simple idea has grown into a
                brand that values quality and authenticity above all else.
              </p>
              <div className="text-sm text-gray-500">
                Posted: January 15, 2023
              </div>
            </div>
          </div>

          {/* Story 2 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6 md:p-8">
              <h2 className="text-2xl font-semibold mb-4">
                Sustainable Innovation
              </h2>
              <p className="text-gray-600 mb-4">
                We're constantly exploring new ways to reduce our environmental
                impact while maintaining the highest quality standards. Our
                commitment to sustainability drives every decision we make.
              </p>
              <div className="text-sm text-gray-500">
                Posted: March 22, 2023
              </div>
            </div>
          </div>

          {/* Story 3 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6 md:p-8">
              <h2 className="text-2xl font-semibold mb-4">Community Impact</h2>
              <p className="text-gray-600 mb-4">
                We believe in giving back to the community that supports us.
                Through various initiatives, we're working to create positive
                change and support local artisans and craftsmen.
              </p>
              <div className="text-sm text-gray-500">Posted: June 10, 2023</div>
            </div>
          </div>

          {/* Story 4 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6 md:p-8">
              <h2 className="text-2xl font-semibold mb-4">Future Vision</h2>
              <p className="text-gray-600 mb-4">
                As we look to the future, we're excited about the possibilities.
                Our commitment to innovation and quality remains unwavering, and
                we're constantly exploring new ways to serve our customers
                better.
              </p>
              <div className="text-sm text-gray-500">
                Posted: September 5, 2023
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
