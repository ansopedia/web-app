import { envConstants } from './envConstants';

export const API = async () => {
  const env = await envConstants();

  return {
    LOGIN: `${env.NEXT_PUBLIC_API_URL}/auth/login`,
    SIGNUP: `${env.NEXT_PUBLIC_API_URL}/auth/sign-up`,
  };
};
