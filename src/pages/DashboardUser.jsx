import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../redux/slices/userSlice";
import { useNavigate } from "react-router-dom";

/**
 * Componente DashboardUser
 * Muestra la información del usuario autenticado.
 * Permite cerrar sesión y regresar al inicio.
 */
function DashboardUser() {
  // Obtiene el usuario actual desde el estado global de Redux
  const user = useSelector((state) => state.user);

  // Hook de Redux para despachar acciones
  const dispatch = useDispatch();

  // Hook de React Router para redirecciones
  const navigate = useNavigate();

  /**
   * Maneja el cierre de sesión
   * 1. Despacha la acción logout para limpiar Redux y localStorage
   * 2. Redirige al usuario a la página de inicio
   */
  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  // Si no hay usuario en sesión, mostramos un mensaje de aviso
  if (!user) {
    return <p>No has iniciado sesión.</p>;
  }

  return (
    <div>
      {/* Mensaje de bienvenida personalizado */}
      <h1 className="text-xl font-bold">Bienvenido, {user.nombre}</h1>

      {/* Información detallada del usuario */}
      <p><strong>Documento:</strong> {user.documento}</p>
      <p><strong>Correo:</strong> {user.correo}</p>
      <p><strong>Teléfono:</strong> {user.telefono}</p>

      {/* Botón para cerrar sesión */}
      <button
        onClick={handleLogout}
        className="bg-red-600 text-white px-4 py-2 mt-4 rounded"
      >
        Cerrar sesión
      </button>
    </div>
  );
}

export default DashboardUser;
