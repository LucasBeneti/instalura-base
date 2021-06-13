import { parseCookies } from 'nookies';
import { LOGIN_COOKIE_APP_TOKEN } from '../login/loginService';
import { HttpClient } from '../../infra/http/HttpClient';
import { isStagingEnv } from '../../infra/env/isStagingEnv';

const BASE_URL = isStagingEnv
  ? // Back End de DEV
    'https://instalura-api.vercel.app'
  : // Back End de PROD
    'https://instalura-api.vercel.app';

export const postService = () => {
  const cookies = parseCookies();
  const token = cookies[LOGIN_COOKIE_APP_TOKEN];

  return {
    async addPost({ photoUrl, description, filter }, HttpClientModule = HttpClient) {
      try {
        const response = await HttpClientModule(`${BASE_URL}/api/posts`, {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${token}`,
          },
          body: {
            photoUrl,
            description,
            filter,
          },
        });
        return response.data;
      } catch (error) {
        throw new Error('Erro ao criar novo post...');
      }
    },
  };
};
