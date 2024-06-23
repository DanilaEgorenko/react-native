module.exports = {
  preset: 'react-native',
  transformIgnorePatterns: [
    'node_modules/(?!(react-native|@react-native|@react-navigation|react-native-video|react-native-image-picker)/)'
  ],
  setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)$': '<rootDir>/__mocks__/fileMock.js',
    '^@react-native-async-storage/async-storage$': '<rootDir>/__mocks__/@react-native-async-storage/async-storage.js',
  },
};
