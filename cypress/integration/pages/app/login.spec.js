/// <reference types='cypress'/>

describe('/pages/app/login', () => {
  it('preencha os campo e vá para a página de perfil', () => {
    cy.visit('/app/login/');

    cy.get('#formCadastro input[name="usuario"]').type('omariosouto');
    cy.get('#formCadastro input[name="senha"]').type('senhasegura');
    cy.get('#formCadastro button[type="submit"]').click();

    cy.url().should('include', '/app/profile');
  });
});
