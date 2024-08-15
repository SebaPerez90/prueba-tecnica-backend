import { Request, Response } from "express";
import { signup, checkCredentials } from "../services/auth.service";
import { postUser } from "../services/user.service";

export const createUser = async (req: Request, res: Response) => {
  try {
    const { email } = req.body;
    const emailRegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!emailRegExp.test(email)) {
      return res
        .status(400)
        .json({ error: "Invalid email format. Enter a valid email plis." });
    } else {
      await signup(req.body);
      await postUser(req.body);

      res.status(201).json({ message: "User registered successfully." });
    }
  } catch (error) {
    res.status(400).json({ error: (error as Error).message });
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const userCredentials = await checkCredentials(req.body);
    const user = {
      name: userCredentials.name,
      phone: userCredentials.phone,
    };

    res.json({ message: "User authenticated successfully.", user });
  } catch (error) {
    res.status(404).json({ error: (error as Error).message });
  }
};
