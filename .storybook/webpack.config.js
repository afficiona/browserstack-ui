const path = require('path');

module.exports = function ({ config }) {
  config.module.rules.push({
    test: /\.stories\.js?$/,
    include: path.resolve('./stories'),
    loaders: [
      require.resolve('@storybook/addon-storysource/loader'),
    ],
    enforce: 'pre',
  });

  config.module.rules.push({
    test: /\.scss$/,
    use: ['style-loader', 'css-loader', 'sass-loader'],
    include: path.resolve('./stories'),
  });

  return config;
};
