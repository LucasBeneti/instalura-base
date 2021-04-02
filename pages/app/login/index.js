import React from 'react';
import websitePageHOC from '../../../src/components/wrappers/WebSitePage/hoc';
import LoginScreen from '../../../src/components/screens/app/LoginScreen';

const LoginPage = () => <LoginScreen />;

export default websitePageHOC(LoginPage, {
  pageWrapperProps: {
    seoProps: {
      headTitle: 'Login',
    },
    menuProps: {
      display: false,
    },
    pageBoxProps: {
      backgroundImage: 'url(/images/bubbles.svg)',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'bottom right',
    },
  },
});
