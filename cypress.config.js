const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://opensource-demo.orangehrmlive.com',
    pageLoadTimeout: 120000, // 2 menit

    setupNodeEvents(on, config) {
      // node events
    },
  },
});
