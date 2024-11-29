import type { Config } from 'jest';

const config: Config = {
    preset: 'ts-jest',
    rootDir: './problems',
    testEnvironment: 'node'
};

export default config;
