import { destroyCookie, setCookie } from 'nookies';
import { isStagingEnv } from '../../infra/env/isStagingEnv';
import { HttpClient } from '../../infra/http/HttpClient';

const BASE_URL = isStagingEnv
  ? 'https://instalura-api-git-master-omariosouto.vercel.app/api/login'
  : 'https://instalura-api.omariosouto.vercel.app/api/login';

export const LOGIN_COOKIE_APP_TOKEN = 'LOGIN_COOKIE_APP_TOKEN';

export const loginService = {
  async login({ username, password }, setCookieModule = setCookie, HttpClientModule = HttpClient) {
    return HttpClientModule(`${BASE_URL}`, {
      method: 'POST',
      body: {
        username,
        password,
      },
    }).then((responseConvertida) => {
      const { token } = responseConvertida.data;
      if (!token) {
        throw new Error('failed to login');
      }
      const DAY_IN_SECONDS = 86400;
      // salvar o token
      setCookieModule(null, LOGIN_COOKIE_APP_TOKEN, token, {
        path: '/',
        maxAge: DAY_IN_SECONDS * 7,
      });

      //escrever os testes
      return { token };
    });
  },
  async logout(ctx, destroyCookieModule = destroyCookie) {
    destroyCookieModule(ctx, LOGIN_COOKIE_APP_TOKEN, { path: '/' });
  },
};
