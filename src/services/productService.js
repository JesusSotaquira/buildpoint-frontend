// src/services/productService.js
const API_URL = "http://localhost:5000/api/products";

export const getProducts = async () => {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) throw new Error("Error al obtener productos");
    return await response.json();
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const createProduct = async (product) => {
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(product),
    });
    return await response.json();
  } catch (error) {
    console.error(error);
  }
};
