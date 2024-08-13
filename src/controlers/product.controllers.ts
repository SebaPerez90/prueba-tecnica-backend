import { getProductByID, getAllProduct } from "../services/product.service";
import { Request, Response } from "express";

export const getAllProductController = async (req: Request, res: Response) => {
  try {
    const products = await getAllProduct();
    console.log(products);

    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
};
