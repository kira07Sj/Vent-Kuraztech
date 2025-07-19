import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import Navbar from "./components/Navbar";
import VentFeed from "./components/Vent/VentList";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";

function App() {
  const context = useContext(AuthContext);
  
  // Safety check
  if (!context) {
    return <div>Error: AuthProvider is missing!</div>;
  }

  const { user } = context;

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<VentFeed />} />
        <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
        <Route path="/register" element={user ? <Navigate to="/" /> : <Register />} />
      </Routes>
    </div>
  );
}

export default App;