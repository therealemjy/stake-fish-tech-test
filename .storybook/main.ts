export default {
  stories: ['../src/**/*.stories.@(ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    'storybook-addon-gatsby',
  ],
  framework: '@storybook/react',
  core: {
    builder: 'webpack5',
  },
};
