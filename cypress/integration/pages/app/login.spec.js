/// <reference types='cypress'/>

describe('/pages/app/login', () => {
  it('preencha os campo e vá para a página de perfil', () => {
    cy.intercept('https://instalura-api-git-master-omariosouto.vercel.app/api/login').as('userLogin');
    cy.visit('/app/login/');

    cy.get('#formCadastro input[name="usuario"]').type('omariosouto');
    cy.get('#formCadastro input[name="senha"]').type('senhasegura');
    cy.get('#formCadastro button[type="submit"]').click();

    cy.url().should('include', '/app/profile');
    cy.wait('@userLogin').then((intercept) => {
      const token = intercept.response.body.data.token;
      cy.getCookie('APP_TOKEN').should('exist').should('have.property', 'value', token);
      console.log('token', intercept.response.body.data.token);
    });
  });
});
