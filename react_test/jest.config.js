/** @type {import('jest').Config} */
const config = {
	collectCoverage: true,
	collectCoverageFrom: [
		'<rootDir>/src/**/*.{js,jsx,ts,tsx}',
		'!**/node_modules/**',
		'!<rootDir>/src/**/*.mock.*',
		'!src/main.tsx',
		'!src/vite-env.d.ts',
	],
	coverageThreshold: {
		global: {
			branches: 80,
			functions: 80,
			lines: 80,
			statements: 80,
		},
	},
	coverageDirectory: 'coverage',
	testEnvironment: 'jsdom',
	setupFilesAfterEnv: ['<rootDir>/internal/jest.setup.js'],
	transform: {
		'^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
	},
	moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
	moduleNameMapper: {
		'^.+\\.svg$': 'jest-svg-transformer',
		'^.+\\.(css|less|scss)$': 'identity-obj-proxy',
	},
}

export default config
