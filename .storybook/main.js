const path = require('path');
module.exports = {
  addons: [{
    name: '@storybook/addon-postcss',
    options: {
      postcssLoaderOptions: {
        implementation: require('postcss')
      }
    }
  }, '@storybook/addon-links', '@storybook/addon-essentials', 'storybook-css-modules-preset', '@storybook/addon-mdx-gfm'],
  core: {
    options: {
      fsCache: true,
      lazyCompilation: true
    }
  },
  features: {
    previewCsfV3: true,
    storyStoreV7: true
  },
  framework: {
    name: '@storybook/react-webpack5',
    options: {
      fastRefresh: true
    }
  },
  staticDirs: ['./static'],
  stories: ['../src/**/*.stories.@(tsx|mdx)'],
  webpackFinal: async config => {
    config.resolve.modules.unshift(path.resolve(__dirname, '../src'));
    ['assets', 'components', 'hooks', 'state', 'types', 'utils'].forEach(alias => {
      config.resolve.alias[alias] = path.resolve(__dirname, `../src/${alias}`);
    });
    config.resolve.modules.push(path.resolve(__dirname, '../test'));
    config.resolve.alias.test = path.resolve(__dirname, '../test');
    config.resolve.fallback = {
      http: false,
      https: false,
      os: false,
      timers: false,
      tty: false,
      util: false,
      zlib: false,
      ...config.resolve.fallback
    };
    return config;
  },
  docs: {
    autodocs: true
  }
};