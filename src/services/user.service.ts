import { User } from "../database/models/user.model";
import { UserDto } from "../dtos/user.dto";

export const findAll = async (): Promise<UserDto[]> => {
  const users: UserDto[] = (await User.find({})) as UserDto[];
  return users;
};

export const postUser = async (userData: UserDto): Promise<UserDto> => {
  const newUser: UserDto = (await User.create(userData)) as UserDto;
  return newUser;
};
