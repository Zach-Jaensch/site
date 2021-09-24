import type { Config } from "@jest/types";

const config: Config.InitialOptions = {
  setupFilesAfterEnv: ["<rootDir>/setupTest.tsx", "jest-extended"],
  roots: ["."],
  moduleDirectories: ["node_modules", "<rootDir>/node_modules", "."],
  coverageDirectory: "coverage",
  collectCoverage: true,
  collectCoverageFrom: [
    "./pages/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "!./src/**/*.stories.{ts,tsx}",
  ],
  coverageReporters: ["lcov"],
  coverageThreshold: {
    global: {
      branches: 0,
      functions: 0,
      lines: 0,
      statements: 0,
    },
  },

  moduleNameMapper: {
    "\\.(css|less|scss|sss|styl)$": "<rootDir>/node_modules/jest-css-modules",
    "next/image": "<rootDir>/__mocks__/next/image/index.tsx",
  },
};

export default config;
