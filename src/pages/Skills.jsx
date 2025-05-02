import React from "react";

export default function Skills() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Our Skills</h1>
          <p className="text-xl text-gray-600 mb-12">
            Discover the expertise and craftsmanship behind our products
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Skill Card 1 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-4xl mb-4">🎨</div>
            <h2 className="text-xl font-semibold mb-4">Design Excellence</h2>
            <p className="text-gray-600">
              Our team of skilled designers creates products that blend
              aesthetics with functionality.
            </p>
          </div>

          {/* Skill Card 2 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-4xl mb-4">🔧</div>
            <h2 className="text-xl font-semibold mb-4">Craftsmanship</h2>
            <p className="text-gray-600">
              Each product is crafted with precision and attention to detail by
              our expert artisans.
            </p>
          </div>

          {/* Skill Card 3 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-4xl mb-4">🌱</div>
            <h2 className="text-xl font-semibold mb-4">Sustainability</h2>
            <p className="text-gray-600">
              We're committed to sustainable practices in every step of our
              production process.
            </p>
          </div>

          {/* Skill Card 4 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-4xl mb-4">💡</div>
            <h2 className="text-xl font-semibold mb-4">Innovation</h2>
            <p className="text-gray-600">
              Constantly pushing boundaries to bring you innovative and unique
              products.
            </p>
          </div>

          {/* Skill Card 5 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-4xl mb-4">🤝</div>
            <h2 className="text-xl font-semibold mb-4">Customer Service</h2>
            <p className="text-gray-600">
              Dedicated to providing exceptional service and support to our
              customers.
            </p>
          </div>

          {/* Skill Card 6 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-4xl mb-4">🎯</div>
            <h2 className="text-xl font-semibold mb-4">Quality Assurance</h2>
            <p className="text-gray-600">
              Rigorous quality checks ensure that every product meets our high
              standards.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
