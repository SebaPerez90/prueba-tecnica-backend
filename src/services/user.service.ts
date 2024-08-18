import { User } from "../database/models/user.model";
import { UserDto } from "../dtos/user.dto";
import bcrypt from "bcrypt";

export const findAll = async (
  page: number,
  limit: number
): Promise<UserDto[]> => {
  if (page && limit) {
    const users: UserDto[] = (await User.find()
      .skip((page - 1) * limit)
      .limit(limit)
      .exec()) as UserDto[];
    return users;
  }
  const users: UserDto[] = (await User.find({})) as UserDto[];
  return users;
};

export const postUser = async (userData: UserDto): Promise<UserDto> => {
  const newUser = await User.create(userData);

  newUser.password = await bcrypt.hash(userData.password, 10);
  await newUser.save();
  return newUser as UserDto;
};
