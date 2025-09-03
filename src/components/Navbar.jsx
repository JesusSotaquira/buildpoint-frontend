import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Navbar() {
  const user = useSelector((state) => state.user);

  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between">
      <Link to="/" className="font-bold">BuildPoint</Link>
      <div className="space-x-4">
        <Link to="/products">Productos</Link>
        <Link to="/cart">Carrito</Link>
        {!user && <Link to="/login">Ingresar</Link>}
        {!user && <Link to="/register">Registrarse</Link>}
        {user && <Link to="/dashboard/user">Mi perfil</Link>}
      </div>
    </nav>
  );
}

export default Navbar;
