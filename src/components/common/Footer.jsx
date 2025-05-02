import React, { useState } from "react";
import cards from "../../assets/cards.png";
import language from "../../assets/language.png";
import instagram from "../../assets/insta.png";
import linkedin from "../../assets/linkedin.png";

export default function Footer() {
  // Accordion state for mobile
  const [open, setOpen] = useState({
    metta: false,
    quick: false,
    follow: false,
  });

  const toggle = (key) => setOpen((prev) => ({ ...prev, [key]: !prev[key] }));

  return (
    <footer className="bg-black text-white w-full overflow-x-hidden">
      {/* Mobile Footer (only on small devices) */}
      <div className="block md:hidden max-w-7xl mx-auto px-4 pt-10 pb-4">
        <div className="flex flex-col gap-6">
          <div>
            <h3 className="font-bold mb-2">BE THE FIRST TO KNOW</h3>
            <p className="mb-4 text-sm">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. this is simply dummy text.
            </p>
            <form className="flex max-w-md w-full">
              <input
                type="email"
                placeholder="Enter your e-mail..."
                className="p-2 rounded-l bg-white text-black flex-1 min-w-0"
              />
              <button className="bg-gray-800 px-4 rounded-r">SUBSCRIBE</button>
            </form>
          </div>
          <div className="border-t border-gray-700"></div>
          <div>
            <h3 className="font-bold mb-2">CALL US</h3>
            <p className="text-sm mb-2">
              +44 221 133 5360 • customercare@mettamuse.com
            </p>
          </div>
          <div className="border-t border-gray-700"></div>
          <div>
            <h3 className="font-bold mb-2">CURRENCY</h3>
            <div className="flex items-center gap-2 mb-1">
              <img src={language} alt="language" className="h-4" />
              {/* <span className="text-sm font-semibold">USD</span> */}
            </div>
          </div>
          <div className="border-t border-gray-700"></div>
          {/* Accordions for mobile */}
          <div>
            {/* metta muse */}
            <button
              onClick={() => toggle("metta")}
              className="w-full flex justify-between items-center py-3 font-bold focus:outline-none"
            >
              metta muse
              <span>{open.metta ? "▲" : "▼"}</span>
            </button>
            {open.metta && (
              <ul className="text-sm space-y-1 pb-2 pl-2">
                <li>About Us</li>
                <li>Stories</li>
                <li>Artisans</li>
                <li>Boutiques</li>
                <li>Contact Us</li>
                <li>EU Compliances Docs</li>
              </ul>
            )}
            <div className="border-t border-gray-700"></div>
            {/* Quick Links */}
            <button
              onClick={() => toggle("quick")}
              className="w-full flex justify-between items-center py-3 font-bold focus:outline-none"
            >
              QUICK LINKS
              <span>{open.quick ? "▲" : "▼"}</span>
            </button>
            {open.quick && (
              <ul className="text-sm space-y-1 pb-2 pl-2">
                <li>Orders & Shipping</li>
                <li>Join/Login as a Seller</li>
                <li>Payment & Pricing</li>
                <li>Return & Refunds</li>
                <li>FAQs</li>
                <li>Privacy Policy</li>
                <li>Terms & Conditions</li>
              </ul>
            )}
            <div className="border-t border-gray-700"></div>
            {/* Follow Us */}
            <button
              onClick={() => toggle("follow")}
              className="w-full flex justify-between items-center py-3 font-bold focus:outline-none"
            >
              FOLLOW US
              <span>{open.follow ? "▲" : "▼"}</span>
            </button>
            {open.follow && (
              <div className="pb-2 pl-2">
                <div className="flex gap-4 mb-4">
                  {/* <span className="inline-block w-8 h-8 rounded-full border border-white flex items-center justify-center">
                    <svg
                      width="20"
                      height="20"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <rect x="9" y="9" width="6" height="6" rx="1" />
                      <line x1="15.5" y1="8.5" x2="15.5" y2="8.5" />
                    </svg>
                  </span>
                  <span className="inline-block w-8 h-8 rounded-full border border-white flex items-center justify-center">
                    <svg
                      width="20"
                      height="20"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <rect x="2" y="2" width="20" height="20" rx="5" />
                      <path d="M16 11.37V7.5a1.5 1.5 0 0 0-3 0v3.87" />
                      <circle cx="12" cy="16" r="1" />
                    </svg>
                  </span> */}
                  <img src={instagram} alt="instagram" className="h-8" />
                  <img src={linkedin} alt="linkedin" className="h-8" />
                  {/* <img src={twitter} alt="twitter" className="h-8" /> */}
                </div>
              </div>
            )}
            <div className="border-t border-gray-700"></div>
          </div>
          <div className="flex flex-wrap gap-2 justify-center mt-4">
            <img src={cards} alt="cards" className="h-8" />
          </div>
        </div>
        <div className="text-center text-xs text-gray-400 mt-8">
          Copyright © 2023 mettamuse. All rights reserved.
        </div>
      </div>
      {/* Desktop/Tablet Footer (only on md and up) */}
      <div className="hidden md:block max-w-7xl mx-auto px-4 md:px-8 pt-10 pb-4">
        {/* Top section: Subscribe and Contact */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-8">
          {/* Subscribe */}
          <div className="flex-1 mb-6 md:mb-0">
            <h3 className="font-bold mb-2">BE THE FIRST TO KNOW</h3>
            <p className="mb-4 text-sm">Sign up for updates from metta muse.</p>
            <form className="flex max-w-md w-full">
              <input
                type="email"
                placeholder="Enter your e-mail..."
                className="p-2 rounded-l bg-white text-black flex-1 min-w-0"
              />
              <button className="bg-gray-800 px-4 rounded-r">SUBSCRIBE</button>
            </form>
          </div>
          {/* Contact & Currency */}
          <div className="flex-1 flex flex-col items-start">
            <h3 className="font-bold mb-2">CONTACT US</h3>
            <p className="text-sm mb-2">
              +44 221 133 5360
              <br />
              customercare@mettamuse.com
            </p>
            <h3 className="font-bold mt-4 mb-2">CURRENCY</h3>
            <div className="flex items-center gap-2 mb-1">
              <img src={language} alt="language" className="h-4" />
            </div>
            <p className="text-xs text-gray-400">
              Transactions will be completed in Euros and a currency reference
              is available on hover.
            </p>
          </div>
        </div>
        {/* Divider */}
        <div className="border-t border-gray-700 my-8"></div>
        {/* Bottom section: Links and Payments */}
        <div className="flex flex-col md:flex-row md:justify-between gap-8">
          {/* Left links */}
          <div className="flex-1 mb-6 md:mb-0">
            <h3 className="font-bold mb-2">metta muse</h3>
            <ul className="text-sm space-y-1">
              <li>About Us</li>
              <li>Stories</li>
              <li>Artisans</li>
              <li>Boutiques</li>
              <li>Contact Us</li>
              <li>EU Compliances Docs</li>
            </ul>
          </div>
          {/* Quick links */}
          <div className="flex-1 mb-6 md:mb-0">
            <h3 className="font-bold mb-2">QUICK LINKS</h3>
            <ul className="text-sm space-y-1">
              <li>Orders & Shipping</li>
              <li>Join/Login as a Seller</li>
              <li>Payment & Pricing</li>
              <li>Return & Refunds</li>
              <li>FAQs</li>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>
          {/* Social and Payments */}
          <div className="flex-1 flex flex-col items-start md:items-end">
            <div>
              <h3 className="font-bold mb-2">FOLLOW US</h3>
              <div className="flex gap-4 mb-4">
                {/* <span className="inline-block w-8 h-8 rounded-full border border-white flex items-center justify-center">
                  <svg
                    width="20"
                    height="20"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <rect x="9" y="9" width="6" height="6" rx="1" />
                    <line x1="15.5" y1="8.5" x2="15.5" y2="8.5" />
                  </svg>
                </span>
                <span className="inline-block w-8 h-8 rounded-full border border-white flex items-center justify-center">
                  <svg
                    width="20"
                    height="20"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <rect x="2" y="2" width="20" height="20" rx="5" />
                    <path d="M16 11.37V7.5a1.5 1.5 0 0 0-3 0v3.87" />
                    <circle cx="12" cy="16" r="1" />
                  </svg>
                </span> */}
                <img src={instagram} alt="instagram" className="h-4 mt-2" />
                <img src={linkedin} alt="linkedin" className="h-6 mt-1" />
                {/* <img src={twitter} alt="twitter" className="h-8" /> */}
              </div>
            </div>
            <div className="mt-2">
              <h3 className="font-bold mb-2">metta muse ACCEPTS</h3>
              <div className="flex flex-wrap gap-2">
                <img src={cards} alt="cards" className="h-8" />
              </div>
            </div>
          </div>
        </div>
        <div className="text-center text-xs text-gray-400 mt-8">
          Copyright © 2025 mettamuse. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
