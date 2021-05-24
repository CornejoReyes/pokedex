/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const MetroConfig = require('metro-config');

const defaultConfig = MetroConfig.getDefaultConfig(__dirname);

module.exports = (async () => {
  const {
    resolver: { sourceExts, assetExts },
  } = await MetroConfig.getDefaultConfig();
  return {
    ...defaultConfig,
    transformer: {
      babelTransformerPath: require.resolve('react-native-svg-transformer'),
    },
    resolver: {
      assetExts: assetExts.filter(ext => ext !== 'svg'),
      sourceExts: [...sourceExts, 'svg'],
    },
  };
})();
