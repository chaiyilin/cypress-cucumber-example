(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports={
  "url": "https://google.com",
  "title": "Google"
}

},{}],2:[function(require,module,exports){
"use strict";

var data = require("./data.json");

given("I open {string} page", function (fieldName) {
  cy.visit(data[fieldName]);
});

/* global cy then */
// we decided to not use this pattern anymore since for some reason it messes up the watcher functionality on linux
// const {then} = require('cypress-cucumber-preprocessor')

then("I see {string} in the title", function (title) {
  cy.title().should("include", data[title]);
});

},{"./data.json":1}]},{},[2]);
