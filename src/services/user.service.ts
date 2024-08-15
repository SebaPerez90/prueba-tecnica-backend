import { User } from "../database/models/user.model";
import { UserDto } from "../dtos/user.dto";
import bcrypt from "bcrypt";

export const findAll = async (): Promise<UserDto[]> => {
  const users: UserDto[] = (await User.find({})) as UserDto[];
  return users;
};

export const postUser = async (userData: UserDto): Promise<UserDto> => {
  const newUser = await User.create(userData);

  newUser.password = await bcrypt.hash(userData.password, 10);
  await newUser.save();
  return newUser as UserDto;
};
