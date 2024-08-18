import { findAll } from "../services/user.service";
import { Request, Response } from "express";

export const getAllUser = async (req: Request, res: Response) => {
  try {
    const { page, limit } = req.query;
    const users = await findAll(Number(page), Number(limit));

    if (users.length === 0) {
      res.status(404).json({ message: "No users found" });
    } else {
      const filteredUsers = users.map((user) => ({
        id: user.id,
        name: user.name,
        phone: user.phone,
      }));
      res.status(200).json(filteredUsers);
    }
  } catch (error) {
    res.status(500).json({ message: (error as Error).message });
  }
};
