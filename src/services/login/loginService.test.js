import { loginService } from './loginService';

const token = 'fake-token';
async function HttpClientModuleMock() {
  return {
    data: {
      token,
    },
  };
}
const setCookieModuleMock = jest.fn();

async function HttpClientModuleErrorMock() {
  return {
    data: {},
    error: {
      message: 'failed to login',
    },
  };
}

describe('loginService', () => {
  describe('login()', () => {
    describe('when user tries to login', () => {
      describe('and succeeds', () => {
        it('store its token', async () => {
          const loginServiceResponse = await loginService.login(
            {
              username: 'someuser',
              password: 'somepassword',
            },
            setCookieModuleMock,
            HttpClientModuleMock,
          );

          expect(setCookieModuleMock).toHaveBeenLastCalledWith(
            null,
            'LOGIN_COOKIE_APP_TOKEN',
            token,
            {
              path: '/',
              maxAge: 604800,
            },
          );
          expect(loginServiceResponse).toEqual({ token });
        });
      });

      describe('and it fails', () => {
        it('throws and error', async () => {
          await expect(
            loginService.login(
              {
                username: 'someuser',
                password: 'somepassword',
              },
              setCookieModuleMock,
              HttpClientModuleErrorMock,
            ),
          ).rejects.toThrow('failed to login');
        });
      });
    });
  });

  describe('logout()', () => {
    describe('when user tries to logout and succeeds', () => {
      it('remove its token', async () => {
        const destroyCookieMock = jest.fn();
        await loginService.logout(null, destroyCookieMock);
        expect(destroyCookieMock).toHaveBeenCalledWith(null, 'LOGIN_COOKIE_APP_TOKEN', {
          path: '/',
        });
      });
    });
  });
});
