describe('Item list', () => {
  it('displays items from the server', () => {
    // define mocks items
    const boyItem = 'Boy clothes';
    const girlItem = 'Girl clothes';
    // const items = [{name: boyItem}, {name: girlItem}];

    // go to list page
    cy.visit('/');
    // check if they appear on the page
    cy.contains(boyItem);
    cy.contains(girlItem);
  });
});
