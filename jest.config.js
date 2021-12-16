module.exports = async () => {
  return {
    verbose: true,
    preset: "ts-jest",
    testEnvironment: "node",
    testPathIgnorePatterns: ["/lib"],
    coverageThreshold: {
      global: {
        branches: 95,
        functions: 100,
        lines: 100,
        statements: 100,
      },
    },
  };
};
