const data = require("./data.json");

given(`I open {string} page`, fieldName => {
  cy.visit(data[fieldName]);
});

/* global cy then */
// we decided to not use this pattern anymore since for some reason it messes up the watcher functionality on linux
// const {then} = require('cypress-cucumber-preprocessor')

then(`I see {string} in the title`, title => {
  cy.title().should("include", data[title]);
});
