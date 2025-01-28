const report = require("multiple-cucumber-html-reporter");

report.generate({
  jsonDir: "test-results",
  reportPath: "./",
  reportName: "Playwright api test report",
  displayDuration: false,
  metadata: {
    browser: {
      name: "chrome",
      version: "60",
    },
    device: "Local test machine",
    platform: {
      name: "ubuntu",
      version: "16.04",
    },
  },
  customData: {
    title: "Test info",
    data: [
      { label: "Project", value: "Trello" },
      { label: "Release", value: "1.2.3" },
      { label: "Cycle", value: "B11221.34321" },
    ],
  },
});
