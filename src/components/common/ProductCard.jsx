import React, { useState } from "react";
import { useAuth } from "../../context/AuthContext";

export default function ProductCard({ product }) {
  const [liked, setLiked] = useState(false);
  const { user } = useAuth();

  return (
    <div className="bg-white p-4 rounded shadow relative flex flex-col h-full">
      <img
        src={product.image}
        alt={product.title}
        className="h-32 mx-auto object-contain"
      />
      <div className="flex-1" />
      {/* Title and Heart icon row at the bottom */}
      <div className="flex items-center justify-between gap-2 mt-4">
        <h3 className="text-sm font-bold line-clamp-2 uppercase">
          {product.title}
        </h3>
        <button
          className={`${
            liked ? "text-red-500" : "text-gray-700"
          } hover:text-red-500 focus:outline-none`}
          style={{ minWidth: 28, minHeight: 28 }}
          onClick={() => setLiked((v) => !v)}
          aria-label={liked ? "Unlike" : "Like"}
        >
          {liked ? (
            // Filled heart
            <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41 0.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          ) : (
            // Outlined heart
            <svg
              width="24"
              height="24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41 0.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          )}
        </button>
      </div>
      {user ? (
        <p className="mt-1 text-gray-700">${product.price}</p>
      ) : (
        <p className="text-xs text-gray-500">
          Sign in{" "}
          <span className="text-gray-400">
            or Create an account to see pricing
          </span>
        </p>
      )}
    </div>
  );
}
