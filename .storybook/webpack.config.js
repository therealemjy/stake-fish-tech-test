module.exports = ({ config }) => {
  const rules = config.module.rules;

  const fileLoaderRule = config.module.rules.find(
    (rule) => rule.test && rule.test.test('.svg')
  );
  fileLoaderRule.exclude = /\.svg$/;

  rules.push({
    test: /\.svg$/,
    use: [
      {
        loader: '@svgr/webpack',
        options: {
          icon: true,
        },
      },
    ],
  });

  return config;
};
