module.exports = function (api) {
  api.cache(true);
  const presets = [
    'module:metro-react-native-babel-preset',
    'babel-preset-expo',
  ];
  const plugins = ['module:react-native-dotenv'];
  return {
    presets,
    plugins,
  };
};
