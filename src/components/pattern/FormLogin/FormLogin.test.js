import React from 'react';
import user from '@testing-library/user-event';
import FormLogin from './index';
import { render, act, screen, waitFor } from '../../../infra/tests/testUtils';

const onSubmitMock = jest.fn();
onSubmitMock.mockImplementation((event) => {
  event.preventDefault();
});

describe('<FormLogin />', () => {
  describe('when form fields are valid', () => {
    it('completes submission', async () => {
      await act(async () => render(<FormLogin onSubmit={onSubmitMock} />));

      expect(screen.getByRole('button')).toBeDisabled();

      const inputUsuario = screen.getByPlaceholderText('Usuário');
      const inputSenha = screen.getByPlaceholderText('Senha');

      user.type(inputUsuario, 'qualquerum');
      user.type(inputSenha, 'qualquersenha');

      await waitFor(() => expect(inputUsuario).toHaveValue('qualquerum'));
      await waitFor(() => expect(inputSenha).toHaveValue('qualquersenha'));

      expect(screen.getByRole('button')).not.toBeDisabled();

      user.click(screen.getByRole('button'));
      expect(onSubmitMock).toHaveBeenCalledTimes(1);
    });
  });

  describe('when form fields are invalid', () => {
    it('displays respective errors', async () => {
      render(<FormLogin onSubmit={onSubmitMock} />);
      const inputUsuario = screen.getByPlaceholderText('Usuário');
      inputUsuario.focus();
      inputUsuario.blur();

      await waitFor(() => screen.getByRole('alert'));

      expect(screen.getByRole('alert')).toHaveTextContent('Preencha no mínimo 3 caractéres');
    });
  });
});
