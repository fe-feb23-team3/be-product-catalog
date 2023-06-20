/* eslint-disable no-console */
import { User } from '../models/User';
import * as userService from './users';
import * as jwtService from './jwtService';

export const login = async(email: string, password: string) => {
  try {
    const user = await userService.getByEmail(email);

    if (!user) {
      throw new Error('User not found');
    }

    if (user.password !== password) {
      throw new Error('Wrong password');
    }

    const accessToken = jwtService.genereteAccessToken(user);

    return { user, accessToken };
  } catch (error) {
    console.log(error);
  }
};

export const register = async(email: string, password: string) => {
  const user = await User.create({ email, password });

  return user;
};
