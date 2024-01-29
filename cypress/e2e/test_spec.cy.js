describe('Test', () => {
    it('should do something', () => {
        cy.visit('jenkins-test.infinityfreeapp.com');
        cy.contains('Test Page')
    });
});