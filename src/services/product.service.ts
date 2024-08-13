import { ENV } from "../environments";

export const getProductByID = async (id: string) => {
  const response = await fetch(`${ENV.API_URL_BASE}/products/${id}`);
  const product = await response.json();
  return product;
};

export const getAllProduct = async () => {
  const response = await fetch(`${ENV.API_URL_BASE}`);
  const products = await response.json();
  return products;
};
