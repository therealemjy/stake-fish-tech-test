import { addDecorator } from '@storybook/react';

import GlobalStyle from '../src/styles/GlobalStyle';

// Import fonts
import '@fontsource/inter/400.css';
import '@fontsource/inter/700.css';

import '../src/styles/reset.css';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

addDecorator((story) => (
  <>
    <GlobalStyle />
    {story()}
  </>
));
