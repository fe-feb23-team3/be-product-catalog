import jwt, { Secret } from 'jsonwebtoken';
import { User } from '../models/User';

export const genereteAccessToken = (user: User) => {
  const payload = { id: user.id, email: user.email };

  return jwt.sign(payload, process.env.JWT_SECRET as Secret);
};

export const verifyAccessToken = (token: string) => {
  try {
    return jwt.verify(token, process.env.JWT_SECRET as Secret);
  } catch (error) {
    return null;
  }
};
