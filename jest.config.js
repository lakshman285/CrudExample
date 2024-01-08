module.exports = {
  preset: 'react-native',
  modulePathIgnorePatterns: [
    '<rootDir/>example/node_modules',
    '<rootDir>/lib/',
  ],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)?$': 'babel-jest',
  },
  //if we want to ignore file
  // './src/screens/ScreenName.js'
  coveragePathIgnorePatterns: [
    '/node_modules/',
    '/.cache/',
    '/coverage/',
    '/src/Utils/AppUtils.js',
  ],
  setupFiles: ['<rootDir>/jest.setup.js'],
  collectCoverage: true,
  coverageThreshold: {
    global: {
      branches: 0,
      functions: 0,
      lines: 0,
      statements: 0,
    },
  },
  testMatch: ['**/__tests__/**/*.test.(js|jsx|ts|tsx)'],
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?react-native|(.*)react-native-elements(.*)|(.*)moti(.*)|(.*)react-native-modal(.*)|(.*)rn-color-matrices(.*)|(.*)concat-color-matrices(.*)|@okta|react-native|(.*)\\.svg$|(.*)\\.png$|(.*)\\.gif$|react-(native|universal|navigation)-(.*)|@react-native/(.*)|@react-native-community/(.*)|@react-navigation/(.*)|bs-platform|(@[a-zA-Z]+/)?(bs|reason|rescript)-(.*)+|@rneui)',
  ],
  testPathIgnorePatterns: ['e2e'],
  modulePaths: ['src', 'node_modules'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  coverageReporters: ['html', 'lcov', 'text-summary'],
};
