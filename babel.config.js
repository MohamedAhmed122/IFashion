module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: [
          '.ios.js',
          '.android.js',
          '.js',
          '.ts',
          '.tsx',
          '.jsx',
          '.json',
        ],
        alias: {
          tests: ['./tests/'],
          '@hooks': './src/hooks',
          '@commons': './src/commons',
          '@components': './src/components',
          '@utils': './src/utils',
          '@redux': './src/redux',
          '@api': './src/api',
          '@styles': './src/styles',
          '@assets': './src/assets',
          '@screen': './src/screen',
          '@navigation': './src/navigation',
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
