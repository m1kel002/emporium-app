import type { Config } from "jest";

const config: Config = {
    preset: 'ts-jest',
    rootDir: './',
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
    transform: {
        "^.+\\.tsx?$": "ts-jest"
    },
    moduleNameMapper: {
        "\\.(css|scss|sass)$": "identity-obj-proxy",
        "\\.(jpg|jpeg|png|gif|svg)$": "<rootDir>/fileMock.js"
    },

};

export default config;