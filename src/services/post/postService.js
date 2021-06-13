import { parseCookies } from 'nookies';
import { LOGIN_COOKIE_APP_TOKEN } from '../login/loginService';
import { HttpClient } from '../../infra/http/HttpClient';
import { isStagingEnv } from '../../infra/env/isStagingEnv';

const BASE_URL = isStagingEnv
  ? // Back-end de DEV
    'https://instalura-api-git-master-omariosouto.vercel.app'
  : // Back-end de PROD
    'https://instalura-api-omariosouto.vercel.app';

export const postService = () => {
  const cookies = parseCookies();
  const token = cookies[LOGIN_COOKIE_APP_TOKEN];

  return {
    async addPost({ photoUrl, description, filter }, HttpClientModule = HttpClient) {
      return HttpClientModule(`${BASE_URL}/api/posts`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: {
          photoUrl,
          description,
          filter,
        },
      })
        .then((post) => post.data)
        .catch((err) => {
          throw new Error(err);
        });
    },
    async likeToggle({ postID }) {
      return HttpClientModule(`${BASE_URL}/api/posts/${postID}/like`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: {},
      });
    },
  };
};
