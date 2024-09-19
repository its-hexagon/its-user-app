import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const getAuthState = async () => {
  const authState = await AsyncStorage.getItem('authState');
  return authState ? JSON.parse(authState) : null;
};

export const apiClient = axios.create({
  baseURL: 'https://its-edu.site',
});

apiClient.interceptors.request.use(
  async (config) => {
    const authState = await getAuthState();
    const accessToken = authState?.accessToken;
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    } else {
      delete config.headers.Authorization;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
