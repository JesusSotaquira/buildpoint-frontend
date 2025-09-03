import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/slices/cartSlice";

// Lista de productos "mockeados" (simulación sin backend)
const products = [
  { id: 1, name: "Cemento Gris", price: 25000, image: "" },
  { id: 2, name: "Varilla de acero 1/2''", price: 12000, image: "" },
  { id: 3, name: "Arena de construcción", price: 8000, image: "" },
  { id: 4, name: "Bloque de concreto", price: 3500, image: "" },
];

function Products() {
  const dispatch = useDispatch();

  // Maneja el evento de agregar al carrito
  const handleAddToCart = (product) => {
    dispatch(addToCart(product)); // Envia el producto al estado global (Redux)
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Productos disponibles</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="border rounded-lg shadow p-4">
            {/* Imagen del producto */}
            <img src={product.image} alt={product.name} className="w-full h-32 object-cover mb-2 rounded"/>
            
            {/* Nombre y precio */}
            <h2 className="text-lg font-semibold">{product.name}</h2>
            <p className="text-gray-700">${product.price.toLocaleString()}</p>

            {/* Botón de acción */}
            <button 
              onClick={() => handleAddToCart(product)} 
              className="bg-blue-600 text-white px-4 py-2 rounded mt-2"
            >
              Agregar al carrito
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
