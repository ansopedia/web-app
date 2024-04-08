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
