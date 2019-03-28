module.exports = {
  preset: 'react-native',
  collectCoverage: true,
  collectCoverageFrom: ['./src/**/*.{js,jsx}'],
  transform: {
    '^.+\\.js$': './node_modules/react-native/jest/preprocessor.js' 
  },
  transformIgnorePatterns: ['./node_modules/(?!(react-native)/)'],
  moduleDirectories: ['node_modules', 'src']
}
