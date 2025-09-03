import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { register } from "../redux/slices/userSlice";
import { useNavigate } from "react-router-dom";

/**
 * Componente Register
 * Permite a un usuario crear una cuenta ingresando sus datos básicos.
 * Los datos se guardan en Redux y en localStorage (simulación de registro sin backend).
 */
function Register() {
  // Hook de Redux para despachar acciones
  const dispatch = useDispatch();

  // Hook de React Router para redirigir al usuario después del registro
  const navigate = useNavigate();

  // Estado local para almacenar los valores del formulario
  const [formData, setFormData] = useState({
    nombre: "",
    documento: "",
    telefono: "",
    correo: "",
    password: "",
  });

  /**
   * Maneja los cambios en los inputs del formulario
   * @param {Event} e - Evento del input
   */
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  /**
   * Maneja el envío del formulario
   * 1. Evita que la página se recargue
   * 2. Envía los datos al estado global con Redux
   * 3. Redirige al Dashboard del usuario
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("[Register.jsx] Datos enviados:", formData); // Log de depuración
    dispatch(register(formData)); // Guarda el usuario en Redux y localStorage
    navigate("/dashboard/user"); // Redirige al perfil de usuario
  };

  return (
    <div>
      <h1 className="text-xl font-bold">Registro</h1>

      {/* Formulario de registro de usuario */}
      <form onSubmit={handleSubmit} className="mt-4 space-y-2">
        {/* Nombre completo */}
        <input
          name="nombre"
          onChange={handleChange}
          placeholder="Nombre completo"
          className="border p-2 w-full"
        />

        {/* Número de documento */}
        <input
          name="documento"
          onChange={handleChange}
          placeholder="Número de documento"
          className="border p-2 w-full"
        />

        {/* Teléfono */}
        <input
          name="telefono"
          onChange={handleChange}
          placeholder="Teléfono"
          className="border p-2 w-full"
        />

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

        {/* Botón de registro */}
        <button className="bg-green-600 text-white px-4 py-2 rounded">
          Registrar
        </button>
      </form>
    </div>
  );
}

export default Register;
