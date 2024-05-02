const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    "defaultCommandTimeout": 30000,
    "responseTimeout": 30000,
    "requestTimeout": 30000,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
