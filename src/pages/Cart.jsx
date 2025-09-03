import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, clearCart } from "../redux/slices/cartSlice";

/**
 * Componente Cart
 * Muestra los productos agregados al carrito de compras.
 * Permite eliminar productos individuales o vaciar el carrito completo.
 */
function Cart() {
  // Obtiene el estado del carrito desde Redux
  const cart = useSelector((state) => state.cart);

  // Hook de Redux para despachar acciones
  const dispatch = useDispatch();

  // Log para depuración (ver contenido del carrito en consola)
  console.log("Contenido del carrito:", cart);

  return (
    <div>
      <h1 className="text-xl font-bold">Carrito</h1>

      {/* Si no hay productos en el carrito, mostrar mensaje */}
      {cart.length === 0 ? (
        <p className="mt-2">No tienes productos en el carrito.</p>
      ) : (
        <div className="mt-4 space-y-2">
          {/* Renderiza cada producto en el carrito */}
          {cart.map((item) => (
            <div
              key={item.id}
              className="border p-2 flex justify-between items-center"
            >
              <div>
                <h2 className="font-semibold">{item.name}</h2>
                <p>${item.price.toLocaleString()}</p>
              </div>

              {/* Botón para eliminar un producto específico */}
              <button
                onClick={() => dispatch(removeFromCart(item.id))}
                className="bg-red-600 text-white px-2 py-1 rounded"
              >
                Eliminar
              </button>
            </div>
          ))}

          {/* Botón para vaciar todo el carrito */}
          <button
            onClick={() => dispatch(clearCart())}
            className="bg-gray-600 text-white px-4 py-2 mt-4 rounded"
          >
            Vaciar carrito
          </button>
        </div>
      )}
    </div>
  );
}

export default Cart;
