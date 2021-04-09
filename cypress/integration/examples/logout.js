import { BASE_URL } from '../../base-url';
describe('Example APP', function () {
  context('Logout', function () {
    it('Localhost Site', function () {
      cy.visit(BASE_URL);
    });
    it('Header click login button', function () {
      cy.get('[id="headerLogin"]').wait(2000).click();
    });
    it('Type valid user name', function () {
      cy.get('[id="name"]').wait(2000).type('mert demir');
    });
    it('Type valid user email', function () {
      cy.get('[id="email"]').wait(2000).type('mert.demir96@hotmail.com');
    });
    it('Type valid user password', function () {
      cy.get('[id="password"]').wait(2000).type('mert');
    });
    it('Modal click login button', function () {
      cy.get('[id="login"]').wait(2000).click();
    });
    it('Header click logout dropdown', function () {
      cy.get('[id="logoutDD"]').wait(2000).click();
    });
    it('Header click logout button', function () {
      cy.get('[id="logout"]').wait(2000).click();
    });
  });
});
