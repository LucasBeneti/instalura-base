import React from 'react';
import user from '@testing-library/user-event';
import { render, screen } from '../../../infra/tests/testUtils';
import WebsiteGlobalProvider from '../../wrappers/WebSitePage/provider';
import TextField from './index';

describe('<TextField />', () => {
  it('renders component', () => {
    render(<TextField placeholder="Nome" value="Lucas" onChange={() => {}} name="lucas" />);
    // screen.debug();

    const textField = screen.getAllByPlaceholderText(/nome/i);
    expect(textField).toMatchSnapshot();
  });

  describe('when field is valid', () => {
    describe('and user is typing', () => {
      it('value must be updated', () => {
        const onChangeMock = jest.fn();
        render(
          <TextField placeholder="Nome" value="" onChange={onChangeMock} name="nome" isTouched />,
        );
        const inputNome = screen.getByPlaceholderText(/nome/i);
        user.type(inputNome, 'lucas');
        expect(onChangeMock).toHaveBeenCalledTimes(5);
      });
    });
  });

  describe('when field is invalid', () => {
    it('displays the respective error message', () => {
      render(
        <TextField
          placeholder="Email"
          value="lbeneti@gmail.com"
          onChange={() => {}}
          name="email"
          isTouched
          error="O campo email é obrigatório"
        />,
      );

      const inputEmail = screen.getByPlaceholderText(/email/i);
      expect(inputEmail).toHaveValue('lbeneti@gmail.com');
      expect(screen.getByRole('alert')).toHaveTextContent('O campo email é obrigatório');
      expect(inputEmail).toMatchSnapshot();
    });
  });
});
