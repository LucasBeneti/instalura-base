import React from 'react';
import { render, screen } from '../../../infra/tests/testUtils';
import WebsiteGlobalProvider from '../../wrappers/WebSitePage/provider';
import TextField from './index';

describe('<TextField />', () => {
  it('renders component', () => {
    render(
      <WebsiteGlobalProvider>
        <TextField placeholder="Nome" value="Lucas" onChange={() => {}} name="lucas" />
      </WebsiteGlobalProvider>,
    );
    // screen.debug();

    const textField = screen.getAllByPlaceholderText(/nome/i);
    expect(textField).toMatchSnapshot();
  });
});
