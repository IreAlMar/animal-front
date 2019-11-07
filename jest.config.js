module.exports = {
  modulePathIgnorePatterns: ['node_modules', 'dist'],
  testRegex: '/src/.*?(Spec)\\.js$',
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif)$': '<rootDir>/src/utils/fileMock.js',
  },
  setupFiles: ['<rootDir>/src/specs/index.js'],
};
