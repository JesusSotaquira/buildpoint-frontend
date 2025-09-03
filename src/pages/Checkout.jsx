import React from "react";

function Checkout() {
  return (
    <div>
      <h1 className="text-xl font-bold">Finalizar Compra</h1>
      <form className="mt-4 space-y-2">
        <input type="text" placeholder="Dirección de envío" className="border p-2 w-full" />
        <input type="text" placeholder="Método de pago" className="border p-2 w-full" />
        <button className="bg-purple-600 text-white px-4 py-2 rounded">Pagar</button>
      </form>
    </div>
  )
}

export default Checkout
