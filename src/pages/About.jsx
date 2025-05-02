import React from "react";

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">About Us</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We are a passionate team dedicated to creating high-quality products
            that combine functionality with beautiful design.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-2xl font-semibold mb-6">Our Mission</h2>
            <p className="text-gray-600 mb-6">
              Our mission is to provide exceptional products that enhance the
              lives of our customers while maintaining sustainable and ethical
              business practices. We believe in creating items that are not only
              beautiful but also built to last.
            </p>
            <p className="text-gray-600">
              Every product we create is a reflection of our commitment to
              quality, innovation, and environmental responsibility.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-6">Our Values</h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span className="text-gray-600">
                  Quality craftsmanship and attention to detail
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span className="text-gray-600">
                  Sustainable and eco-friendly practices
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span className="text-gray-600">
                  Customer satisfaction and support
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span className="text-gray-600">
                  Innovation and continuous improvement
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span className="text-gray-600">
                  Community engagement and social responsibility
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-semibold mb-6">Our Team</h2>
          <p className="text-gray-600 mb-6">
            Behind every product is a team of dedicated professionals who bring
            their expertise and passion to their work. From designers to
            craftsmen, each member of our team plays a crucial role in creating
            products that we're proud to share with you.
          </p>
          <p className="text-gray-600">
            We believe in fostering a collaborative environment where creativity
            and innovation thrive, ensuring that we can continue to deliver
            exceptional products to our customers.
          </p>
        </div>
      </div>
    </div>
  );
}
