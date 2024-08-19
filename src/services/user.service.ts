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

export const findOne = async (id: string): Promise<UserDto> => {
  const userFound = (await User.findById({ _id: id })) as UserDto;
  if (!userFound) {
    throw new Error(`User with id: ${id} not found`);
  }
  return userFound;
};

export const postUser = async (userData: UserDto): Promise<UserDto> => {
  const newUser = await User.create(userData);

  newUser.password = await bcrypt.hash(userData.password, 10);
  await newUser.save();
  return newUser as UserDto;
};

export const updateOnebyID = async (
  id: string,
  updatedUserData: Partial<UserDto>
): Promise<UserDto> => {
  const userFound = (await User.findByIdAndUpdate(id, updatedUserData, {
    new: true,
  })) as UserDto;

  if (!userFound) throw new Error(`User with id: ${id} not found`);
  return userFound;
};

export const deleteOne = async (id: string) => {
  const user = (await User.findById({ _id: id })) as UserDto;
  const userDeleted = await User.deleteOne({ _id: id });

  if (!user) throw new Error(`User with id: ${id} not found`);
  return { userDeleted, user };
};
