import { addDecorator } from '@storybook/react';

import ResetStyle from '../src/styles/ResetStyle';
import GlobalStyle from '../src/styles/GlobalStyle';

// Import fonts
import '@fontsource/inter/400.css';
import '@fontsource/inter/700.css';

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
    <ResetStyle />
    <GlobalStyle />

    {story()}
  </>
));
