describe('Item list', () => {
  it('displays items from the server', () => {
    // // define mocks items
    // const boyItem = 'Boy clothes';
    // const girlItem = 'Girl clothes';
    // const response = [{name: boyItem}, {name: girlItem}];

    // cy.server({force404: true});
    // cy.route({
    //   method: 'GET',
    //   // url: 'https://firebase.com',
    //   url:
    //     'https://api.outsidein.dev/wRLRwKdVZ9N7ei4PeyIyWOG9Sj8hYZAa/restaurants',
    //   response,
    // });
    // go to list page
    cy.visit('/');
    // // check if they appear on the page
    // cy.contains(boyItem);
    // cy.contains(girlItem);
  });
});
