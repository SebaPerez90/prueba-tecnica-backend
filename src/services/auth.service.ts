import { User } from "../database/models/user.model";
import { UserDto } from "../dtos/user.dto";

export const signup = async ({ email }: Partial<UserDto>) => {
  const usersEmail = await User.find({}).select("email");

  for (let i = 0; i < usersEmail.length; i++) {
    if (usersEmail[i].email === email) {
      throw new Error(`User with email ${email} is already exist.`);
    }
  }
  return usersEmail;
};
