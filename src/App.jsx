import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import Navbar from "./components/Navbar";
import VentFeed from "./components/Vent/VentList";
import Hero from "./components/Hero";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import Home from "./components/Home";

function App() {
  const context = useContext(AuthContext);
  
  // Safety check
  if (!context) {
    return <div>Error: AuthProvider is missing!</div>;
  }

  const { user } = context;

  return (
    <div>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/login" element={user ? <Navigate to="/home" /> : <Login />} />
        <Route path="/register" element={user ? <Navigate to="/home" /> : <Register />} />
        <Route path="/home" element={<Home/>} />
        
      </Routes>
    </div>
  );
}

export default App;