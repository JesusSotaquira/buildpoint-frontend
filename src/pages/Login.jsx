import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../redux/slices/userSlice";
import { useNavigate, Link } from "react-router-dom";

/**
 * Componente Login
 * Permite a un usuario iniciar sesión en la aplicación.
 * Los datos se comparan de manera simulada y se guardan en Redux + localStorage.
 */
function Login() {
  // Hook de Redux para despachar acciones
  const dispatch = useDispatch();

  // Hook de React Router para redirigir después del login
  const navigate = useNavigate();

  // Estado local para capturar los valores del formulario
  const [formData, setFormData] = useState({ correo: "", password: "" });

  /**
   * Maneja el cambio de valores en los inputs
   * @param {Event} e - Evento del input
   */
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  /**
   * Maneja el envío del formulario
   * 1. Evita la recarga de la página
   * 2. Despacha la acción de login a Redux
   * 3. Redirige al dashboard de usuario
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("[Login.jsx] Datos enviados:", formData); // Log de depuración
    dispatch(login(formData)); // Guarda el usuario en Redux y localStorage
    navigate("/dashboard/user"); // Redirige al perfil
  };

  return (
    <div>
      <h1 className="text-xl font-bold">Iniciar sesión</h1>

      {/* Formulario de inicio de sesión */}
      <form onSubmit={handleSubmit} className="mt-4 space-y-2">
        {/* Correo electrónico */}
        <input
          name="correo"
          type="email"
          onChange={handleChange}
          placeholder="Correo"
          className="border p-2 w-full"
        />

        {/* Contraseña */}
        <input
          name="password"
          type="password"
          onChange={handleChange}
          placeholder="Contraseña"
          className="border p-2 w-full"
        />

        {/* Botón para enviar el formulario */}
        <button className="bg-blue-600 text-white px-4 py-2 rounded w-full">
          Ingresar
        </button>
      </form>

      {/* Enlace hacia la página de registro */}
      <p className="mt-4 text-sm text-gray-700">
        ¿No tienes cuenta?{" "}
        <Link to="/register" className="text-blue-600 hover:underline">
          Regístrate aquí
        </Link>
      </p>
    </div>
  );
}

export default Login;
