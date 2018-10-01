import inputData from "./input.data";
import outputData from "./output.data";

given(`I open {string} page`, url => {
  cy.visit(inputData[url]);
});

when(`I type {string} into search box`, searchInput => {
  cy.get("#lst-ib").type(inputData[searchInput]);
});

when(`I click the search button`, () => {
  cy.get('input[value="Google Search"]').click();
});

then(`I can see {string} in the seach output`, keyword => {
  cy.document()
    .its("body")
    .contains(outputData[keyword]);
});
