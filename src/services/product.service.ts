import { ProductDto } from "../dtos/product.dto";
import { ENV } from "../environments";

export const findAll = async (): Promise<ProductDto[] | undefined> => {
  const response = await fetch(`${ENV.API_URL_BASE}`);
  const products: ProductDto[] = (await response.json()) as ProductDto[];
  return products;
};

export const allCategories = async (): Promise<ProductDto[] | undefined> => {
  const response = await fetch(`${ENV.API_URL_BASE}/categories`);
  const categories: ProductDto[] = (await response.json()) as ProductDto[];
  return categories;
};

export const getByID = async (id: string): Promise<ProductDto> => {
  const response = await fetch(`${ENV.API_URL_BASE}/${id}`);
  const product: ProductDto = (await response.json()) as ProductDto;
  return product;
};
