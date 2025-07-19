// src/components/Navbar.jsx
import { useContext} from "react";
import { AuthContext } from "../context/AuthContext";

export default function Navbar() {
  const { user, logout } = useContext(AuthContext);

  return (
    <nav className="bg-gray-800 text-white p-4 w-full fixed z-[99]">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">VentSpace</h1>
        {user ? (
          <div className="flex items-center gap-4">
            <span>Hi, {user.email}</span>
            <button onClick={logout} className="bg-red-500 px-3 py-1 rounded">
              <a href="/login">Logout</a>
            </button>
          </div>
        ) : (
          <div className="flex gap-4">
            <a href="/login" className="hover:underline">Login</a>
            <a href="/register" className="hover:underline">Register</a>
          </div>
        )}
      </div>
    </nav>
  );
}