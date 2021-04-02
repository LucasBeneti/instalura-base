/// <reference types='cypress'/>

import LoginScreenPageObject from '../../../../src/components/screens/app/LoginScreen/LoginScreen.pageObject';

describe('/pages/app/login', () => {
  describe('when filling and submita form login request', () => {
    it('go to profile page', () => {
      cy.intercept('https://instalura-api-git-master-omariosouto.vercel.app/api/login').as('userLogin');
      const loginScreen = new LoginScreenPageObject(cy);

      loginScreen.fillLoginForm({ user: 'omariosouto', password: 'senhasegura' }).submitloginForm();

      cy.url().should('include', '/app/profile');
      cy.wait('@userLogin').then((intercept) => {
        const { token } = intercept.response.body.data;
        cy.getCookie('APP_TOKEN').should('exist').should('have.property', 'value', token);
      });
    });
  });
});
