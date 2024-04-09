'use server';

import { cookies } from 'next/headers';

export const saveAccessToken = (token: string) => {
  cookies().set({
    name: 'accessToken',
    value: token,
    httpOnly: true,
    secure: true,
    sameSite: 'strict',
  });
};

export interface IApiResponse<T = undefined> {
  response: Response;
  statusCode: number;
  status: 'success' | 'failed';
  message: string;
  data: T;
}
