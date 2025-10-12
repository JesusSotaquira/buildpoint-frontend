// src/pages/Products.jsx
import React, { useEffect, useState } from "react";
import { getProducts, createProduct } from "../services/productService";

function Products() {
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({ name: "", price: "" });

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    const data = await getProducts();
    setProducts(data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!newProduct.name || !newProduct.price) return;
    await createProduct(newProduct);
    setNewProduct({ name: "", price: "" });
    loadProducts();
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Productos</h1>

      {/* Formulario para agregar producto */}
      <form onSubmit={handleSubmit} className="mb-4 flex gap-2">
        <input
          type="text"
          placeholder="Nombre"
          value={newProduct.name}
          onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
          className="border p-2 rounded"
        />
        <input
          type="number"
          placeholder="Precio"
          value={newProduct.price}
          onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
          className="border p-2 rounded"
        />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
          Agregar
        </button>
      </form>

      {/* Lista de productos */}
      <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {products.map((p) => (
          <li key={p.id} className="border rounded p-4 shadow">
            <h3 className="font-semibold">{p.name}</h3>
            <p>${p.price.toLocaleString()}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Products;
