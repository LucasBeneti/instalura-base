import { destroyCookie, setCookie } from 'nookies';
import { isStagingEnv } from '../../infra/env/isStagingEnv';

async function HttpClient(url, { headers, body, ...options }) {
  return fetch(url, {
    headers: {
      ...headers,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
    ...options,
  }).then((response) => {
    if (response.ok) {
      return response.json();
    }
    throw new Error('Falha em pegar os dados do servidor :/');
  });
}
const BASE_URL = isStagingEnv
  ? 'https://instalura-api-git-master-omariosouto.vercel.app/api/login'
  : 'https://instalura-api.omariosouto.vercel.app/api/login';

export const loginService = {
  async login({ username, password }) {
    return HttpClient(`${BASE_URL}`, {
      method: 'POST',
      body: {
        username,
        password,
      },
    }).then((responseConvertida) => {
      const { token } = responseConvertida.data;
      const DAY_IN_SECONDS = 86400;
      // salvar o token
      setCookie(null, 'APP_TOKEN', token, {
        path: '/',
        maxAge: DAY_IN_SECONDS * 7,
      });

      //escrever os testes
      return { token };
    });
  },
  logou() {
    destroyCookie(null, 'APP_TOKEN');
  },
};