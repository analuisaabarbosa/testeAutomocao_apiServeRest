const { defineConfig } = require("cypress");
const registerReportPortalPlugin = require("@reportportal/agent-js-cypress/lib/plugin");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      return registerReportPortalPlugin(on, config);
    },
    baseUrl: "http://localhost:3000/",
    reporter: "@reportportal/agent-js-cypress",
    reporterOptions: {
      endpoint: "https://demo.reportportal.io/api/v1",
      apiKey:
        "EBAC-Test_lekr5RmZSYSmSqDMtadxNy7LpOHXoJsiYTczEsQQBTKcSLdjG4iJWfxFVkbH4QuF",
      project: "analuisaabarbosa_personal",
      launch: "Testes de API com Cypress",
      description: "Testando funcionalidades da API ServeRest",
    },
  },
});
