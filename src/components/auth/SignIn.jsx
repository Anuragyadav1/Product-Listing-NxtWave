import React, { useState } from "react";
import { useAuth } from "../../context/AuthContext";

export default function SignIn({ onClose }) {
  const { signIn, error, loading, clearError } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    clearError();
    const success = await signIn(email, password);
    if (success) onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <form
        onSubmit={handleSubmit}
        className="p-6 bg-white rounded shadow w-80 mx-auto"
      >
        <h2 className="font-bold mb-4 text-center">Sign In</h2>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="w-full p-2 border mb-2"
          required
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Password"
          className="w-full p-2 border mb-2"
          required
        />
        {error && (
          <div className="text-red-500 text-sm mb-2 p-2 bg-red-50 rounded">
            {error}
          </div>
        )}
        <button
          type="submit"
          className="w-full bg-black text-white py-2 rounded disabled:opacity-50"
          disabled={loading}
        >
          {loading ? "Signing in..." : "Sign In"}
        </button>
        <button
          type="button"
          onClick={() => {
            clearError();
            onClose();
          }}
          className="w-full mt-2 text-sm text-gray-500"
        >
          Cancel
        </button>
      </form>
    </div>
  );
}
