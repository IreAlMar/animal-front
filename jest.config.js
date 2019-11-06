module.exports = {
  testRegex: '/src/.*?(Spec)\\.js$',
  modulePathIgnorePatterns: ['node_modules', 'dist'],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif)$': '<rootDir>/src/utils/fileMock.js',
  },
};
