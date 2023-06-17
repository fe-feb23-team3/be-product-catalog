import { User } from '../models/User';

export const register = async(email: string, password: string) => {
  const user = await User.create({ email, password });

  return user;
};
