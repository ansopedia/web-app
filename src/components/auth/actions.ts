import axios, { AxiosError } from 'axios';
import { Login, CreateUser } from '../../utils/validation';
import { saveAccessToken } from '../../utils/auth.util';
import { API } from '../../constants/api';

export const handleLogin = async (formData: Login) => {
  try {
    const { LOGIN } = await API();
    const res = await axios.post(LOGIN, formData, {
      withCredentials: true,
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (res.data.status === 'failed') {
      return res.data;
    }

    const accessToken: string = res.headers.authorization;
    saveAccessToken(accessToken);

    return res.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      return error.response?.data;
    } else {
      return error;
    }
  }
};

export const handleSignUp = async (formData: CreateUser) => {
  try {
    const { SIGNUP } = await API();

    const res = await axios.post(SIGNUP, formData, {
      withCredentials: true,
      headers: {
        'Content-Type': 'application/json',
      },
    });

    return res.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      return error.response?.data;
    } else {
      return error;
    }
  }
};
