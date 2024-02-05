describe('Test', () => {
    it('should do something', () => {
        cy.visit('http://jenkins-test.infinityfreeapp.com/');
        cy.contains('hello world')
    });
});