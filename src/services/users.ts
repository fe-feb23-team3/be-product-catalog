import { User } from '../models/User';

export const getAll = async() => {
  const users = await User.findAll();

  return users;
};

export const getByEmail = async(email: string) => {
  const user = await User.findOne({ where: { email } });

  return user;
};
