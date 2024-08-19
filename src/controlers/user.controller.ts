import {
  deleteOne,
  findAll,
  findOne,
  updateOnebyID,
} from "../services/user.service";
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

export const getUserById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const userFound = await findOne(id);
    const user = {
      name: userFound.name,
      phone: userFound.phone,
    };
    res.status(200).json(user);
  } catch (error) {
    res.status(404).json({ error: (error as Error).message });
  }
};

export const updateUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const userFound = await updateOnebyID(id, req.body);
    const user = {
      id: userFound.id,
      name: userFound.name,
      phone: userFound.phone,
    };
    res.status(200).json(user);
  } catch (error) {
    res.status(404).json({ error: (error as Error).message });
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { user } = await deleteOne(id);
    res
      .status(200)
      .json({ message: "User deleted successfully", userDeleted: user });
  } catch (error) {
    res.status(404).json({ error: (error as Error).message });
  }
};
