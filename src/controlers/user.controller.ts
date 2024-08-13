import { findAll } from "../services/user.service";
import { Request, Response } from "express";

export const getAllUser = async (req: Request, res: Response) => {
  try {
    const users = await findAll();
    if (users.length === 0) {
      res.status(404).json({ message: "No users found" });
    } else {
      res.status(200).json(users);
    }
  } catch (error) {
    res.status(500).json({ message: (error as Error).message });
  }
};
