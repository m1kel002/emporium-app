/** @type {import('ts-jest').JestConfigWithTsJest} **/
export default {
  // testEnvironment: "node",
  // transform: {
  //   "^.+\.tsx?$": ["ts-jest",{}],
  // },

  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  rootDir: './',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  transform: {
    '^.+\\.tsx?$': ['ts-jest',{}],
  },
  moduleNameMapper: {
    '\\.(css|scss|sass)$': 'identity-obj-proxy',
    '\\.(jpg|jpeg|png|gif|svg)$': '<rootDir>/fileMock.js',
  },
};