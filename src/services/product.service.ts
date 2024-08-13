import { ProductDto } from "../dtos/product.dto";
import { ENV } from "../environments";

export const findAll = async (): Promise<ProductDto[] | undefined> => {
  try {
    const response = await fetch(`${ENV.API_URL_BASE}`);
    if (response.ok) {
      const products: ProductDto[] = (await response.json()) as ProductDto[];
      return products;
    }
  } catch (error) {
    throw new Error("Error fetching products");
  }
};

export const getByID = async (id: string): Promise<ProductDto> => {
  const response = await fetch(`${ENV.API_URL_BASE}/${id}`);
  const product: ProductDto = (await response.json()) as ProductDto;
  return product;
};
