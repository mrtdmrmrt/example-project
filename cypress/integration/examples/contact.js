import { BASE_URL } from '../../base-url';
describe('Example APP', function () {
  context('Contact Page', function () {
    it('Localhost Site', function () {
      cy.visit(BASE_URL);
    });
    it('Header click contact', function () {
      cy.get('[id="contactBtn"]').wait(2000).click();
    });
    it('Type valid user name', function () {
      cy.get('[id="contactName"]').wait(2000).type('mert demir');
    });
    it('Type valid user email', function () {
      cy.get('[id="contactEmail"]').wait(2000).type('mert.demir96@hotmail.com');
    });
    it('Type valid user phone number', function () {
      cy.get('[id="contactPhoneNumber"]').wait(2000).type(11111111111);
    });
    it('Type valid country', function () {
      cy.get('[id="contactCountry"]').wait(2000).click();
      cy.get('li').first();
    });
    it('Type valid text', function () {
      cy.get('[id="contactText"]').wait(2000).type('Cypress deneme');
    });
    it('Modal click send button', function () {
      cy.get('[id="contactSend"]').wait(2000).click();
    });
  });
});
