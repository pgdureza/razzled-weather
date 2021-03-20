// eslint-disable-next-line no-undef
module.exports = {
  roots: ['<rootDir>/src'],
  setupFiles: ['<rootDir>/test-setup.js'],
  testMatch: ['**/__tests__/**/*.+(ts|tsx|js)', '**/?(*.)+(spec|test).+(ts|tsx|js)'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga|pdf)$':
      '<rootDir>/__mocks__/fileMock.js',
    '^@components(.*)$': '<rootDir>/src/components$1',
    '^@hooks(.*)$': '<rootDir>/src/hooks$1',
    '^@store(.*)$': '<rootDir>/src/store$1',
    '^@sagas(.*)$': '<rootDir>/src/sagas$1',
    '^@styles(.*)$': '<rootDir>/src/styles$1',
    '^@layout(.*)$': '<rootDir>/src/layout$1',
    '^@lib(.*)$': '<rootDir>/src/lib$1',
  },
}
