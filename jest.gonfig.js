module.exports = {
  modulePaths: ['src'],
  moduleDirectories: ['node_modules'],
  moduleNameMapper: {
    '^@(.*)$': '.$1',
    '^@constants(.*)$': '<rootDir>/constants$1',
    '^@assets(.*)$': '<rootDir>/assets$1',
    '^@components(.*)$': '<rootDir>/components$1',
    '^containers(.*)$': '<rootDir>/containers$1',
    '^@services(.*)$': '<rootDir>/services$1',
    '^@Types(.*)$': '<rootDir>/types$1',
    '^@store(.*)$': '<rootDir>/store$1',
  },
};
