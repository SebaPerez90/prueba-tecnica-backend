import { User } from "../database/models/user.model";
import { UserDto } from "../dtos/user.dto";
import bcrypt from "bcrypt";

export const signup = async ({ email }: Partial<UserDto>) => {
  const usersEmail = await User.find({}).select("email");

  for (let i = 0; i < usersEmail.length; i++) {
    if (usersEmail[i].email === email) {
      throw new Error(`User with email ${email} is already exist.`);
    }
  }
  return usersEmail;
};

export const checkCredentials = async ({
  email,
  password,
}: Partial<UserDto>): Promise<UserDto> => {
  const userFound: UserDto = (await User.findOne({ email })) as UserDto;

  if (!userFound) {
    throw new Error(`Incorrect credentials! Please try again`);
  }

  if (password && userFound.password) {
    const isPasswordCorrect = bcrypt.compare(password, userFound.password);

    if (!isPasswordCorrect) {
      throw new Error(`Incorrect credentials! Please try again`);
    }
  }

  return userFound;
};
