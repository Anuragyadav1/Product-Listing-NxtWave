import React, { useState } from "react";
import logo from "../../assets/Vector.png";
import SignIn from "../auth/SignIn";
import SignUp from "../auth/SignUp";
import { useAuth } from "../../context/AuthContext";

export default function Header() {
  const [showSignIn, setShowSignIn] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  const { user, signOut } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white border-b border-gray-200">
      {/* Mobile Navbar (only on small devices) */}
      <div className="flex items-center justify-between relative px-4 py-4 md:hidden">
        {/* Hamburger for mobile */}
        <button
          className="mr-2"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Open menu"
        >
          <svg
            width="28"
            height="28"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <line x1="4" y1="6" x2="20" y2="6" />
            <line x1="4" y1="12" x2="20" y2="12" />
            <line x1="4" y1="18" x2="20" y2="18" />
          </svg>
        </button>
        {/* Logo */}
        <a href="/">
          <img src={logo} alt="Logo" className="w-8 h-4 object-contain mr-24" />
        </a>
        {/* Centered LOGO text */}
        <span className="text-2xl font-bold tracking-wide absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          LOGO
        </span>
        {/* Icons on the right (mobile: only show search, heart, bag) */}
        <div className="flex items-center gap-4 text-xl text-black">
          <span className="cursor-pointer">
            <svg
              width="20"
              height="20"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </span>
          <span className="cursor-pointer">
            <svg
              width="20"
              height="20"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41 0.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          </span>
          <span className="cursor-pointer">
            <svg
              width="20"
              height="20"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M6 6h15l-1.5 9h-13z" />
              <circle cx="9" cy="21" r="1" />
              <circle cx="20" cy="21" r="1" />
            </svg>
          </span>
        </div>
      </div>
      {/* Desktop/Tablet Navbar (only on md and up) */}
      <div className="hidden md:flex flex-col items-center py-6 px-4 md:px-8">
        <div className="w-full flex items-center justify-between">
          {/* Logo on the left */}
          <div className="flex items-center gap-2">
            <a href="/">
              <img src={logo} alt="Logo" className="w-8 h-8 object-contain" />
            </a>
          </div>
          {/* Navigation links in the center */}
          <div className="flex-1 flex justify-center items-center gap-8">
            <a href="/" className="text-lg font-medium hover:text-gray-600">
              SHOP
            </a>
            <a
              href="/skills"
              className="text-lg font-medium hover:text-gray-600"
            >
              SKILLS
            </a>
            <a
              href="/stories"
              className="text-lg font-medium hover:text-gray-600"
            >
              STORIES
            </a>
            <a
              href="/about"
              className="text-lg font-medium hover:text-gray-600"
            >
              ABOUT
            </a>
            <a
              href="/contact"
              className="text-lg font-medium hover:text-gray-600"
            >
              CONTACT US
            </a>
          </div>
          {/* Icons and auth buttons on the right */}
          <div className="flex items-center gap-6 text-xl text-black">
            <span className="cursor-pointer">
              <svg
                width="20"
                height="20"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </span>
            <span className="cursor-pointer">
              <svg
                width="20"
                height="20"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41 0.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
            </span>
            <span className="cursor-pointer">
              <svg
                width="20"
                height="20"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M6 6h15l-1.5 9h-13z" />
                <circle cx="9" cy="21" r="1" />
                <circle cx="20" cy="21" r="1" />
              </svg>
            </span>
            {user ? (
              <>
                <span className="ml-4 text-sm">{user.email}</span>
                <button
                  onClick={signOut}
                  className="ml-2 px-2 py-1 text-xs bg-gray-200 rounded"
                >
                  Sign Out
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={() => setShowSignIn(true)}
                  className="ml-4 px-2 py-1 text-xs bg-gray-200 rounded"
                >
                  Sign In
                </button>
                <button
                  onClick={() => setShowSignUp(true)}
                  className="ml-2 px-2 py-1 text-xs bg-gray-200 rounded"
                >
                  Sign Up
                </button>
              </>
            )}
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden fixed inset-0 bg-white z-50">
          <div className="p-4">
            <button
              className="absolute top-4 right-4"
              onClick={() => setMenuOpen(false)}
            >
              <svg
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
            <div className="flex flex-col gap-4 mt-8">
              <a href="/" className="text-lg">
                SHOP
              </a>
              <a href="/skills" className="text-lg">
                SKILLS
              </a>
              <a href="/stories" className="text-lg">
                STORIES
              </a>
              <a href="/about" className="text-lg">
                ABOUT
              </a>
              <a href="/contact" className="text-lg">
                CONTACT US
              </a>
              {user ? (
                <>
                  <span className="text-lg">{user.email}</span>
                  <button onClick={signOut} className="text-lg text-left">
                    Sign Out
                  </button>
                </>
              ) : (
                <>
                  <button
                    onClick={() => {
                      setShowSignIn(true);
                      setMenuOpen(false);
                    }}
                    className="text-lg text-left"
                  >
                    Sign In
                  </button>
                  <button
                    onClick={() => {
                      setShowSignUp(true);
                      setMenuOpen(false);
                    }}
                    className="text-lg text-left"
                  >
                    Sign Up
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      )}
      {/* Auth Modals */}
      {showSignIn && <SignIn onClose={() => setShowSignIn(false)} />}
      {showSignUp && <SignUp onClose={() => setShowSignUp(false)} />}
    </header>
  );
}
