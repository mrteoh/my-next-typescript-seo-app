// jest.config.js
const nextJest = require("next/jest");

const createJestConfig = nextJest({
  dir: "./", // Path to your Next.js app
});

const customJestConfig = {
  testEnvironment: "jsdom", // 👈 this uses jest-environment-jsdom
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
};

module.exports = createJestConfig(customJestConfig);
