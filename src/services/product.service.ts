import { IProduct } from "../dtos/product.dto";
import { ENV } from "../environments";

export const findAll = async (): Promise<IProduct[] | undefined> => {
  try {
    const response = await fetch(`${ENV.API_URL_BASE}`);
    if (response.ok) {
      const products: IProduct[] = (await response.json()) as IProduct[];
      return products;
    }
  } catch (error) {
    throw new Error("Error fetching products");
  }
};

export const getByID = async (id: string): Promise<IProduct> => {
  const response = await fetch(`${ENV.API_URL_BASE}/${id}`);
  const product: IProduct = (await response.json()) as IProduct;
  return product;
};
