// src/components/Auth/Register.jsx
import { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

// Make sure to use `export default` 
export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { register } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!register(email, password)) {
      alert("Email already exists!");
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-200 via-indigo-200 to-purple-400">
      <div className="max-w-md mx-auto p-8 bg-white rounded-xl shadow-lg">
        <h2 className="text-3xl font-extrabold mb-6 text-indigo-700">Register</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 mb-4 border border-indigo-200 rounded focus:outline-none focus:ring-2 focus:ring-purple-400"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 mb-6 border border-indigo-200 rounded focus:outline-none focus:ring-2 focus:ring-purple-400"
            required
          />
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-500 to-indigo-600 text-white p-3 rounded-lg font-semibold shadow hover:from-indigo-500 hover:to-purple-600 transition"
          >
            Register
          </button>
        </form>
        <div className="mt-6 text-center text-sm text-gray-500">
          Already have an account?{" "}
          <a href="/login" className="text-blue-600 hover:underline font-medium">
            Sign in
          </a>
        </div>
      </div>
    </section>
  );
}