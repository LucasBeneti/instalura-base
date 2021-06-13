import { isStagingEnv } from '../../infra/env/isStagingEnv';
import { HttpClient } from '../../infra/http/HttpClient';
import { authService } from '../auth/authService';

const BASE_URL = isStagingEnv
  ? 'https://instalura-api-git-master-omariosouto.vercel.app'
  : 'https://instalura-api.omariosouto.vercel.app';

export const userService = {
  async getProfilePage(ctx, HttpClientModule = HttpClient) {
    const url = `${BASE_URL}/api/users/posts`;
    try {
      const token = await authService(ctx).getToken();
      const response = await HttpClientModule(url, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
      return {
        userInfo: {
          bio: 'A wholesome person responsible for the best movies ever.',
          totalPosts: 234,
          totalFollowing: 22000,
          totalFollowers: 134000,
        },
        posts: response.data,
      };
    } catch (error) {
      throw new Error('Não conseguimos pegar os posts');
    }
  },
};
