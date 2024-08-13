import { getByID, findAll } from "../services/product.service";
import { Request, Response } from "express";

export const getAllProduct = async (req: Request, res: Response) => {
  try {
    const products = await findAll();
    if (products?.length === 0) {
      res.status(404).json({ message: "No products found" });
    } else {
      res.status(200).json(products);
    }
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
};

export const getProductByID = async (req: Request, res: Response) => {
  try {
    const parseID = parseInt(req.params.id);
    if (isNaN(parseID)) {
      res.status(400).json({
        id: req.params.id,
        message: "ID Must be a number. Please try again",
      });
    } else {
      const product = await getByID(req.params.id);
      res.status(200).json(product);
    }
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
};
