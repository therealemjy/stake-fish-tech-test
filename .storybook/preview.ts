// Import fonts
import '@fontsource/inter/400.css';
import '@fontsource/inter/700.css';

import '../src/styles/reset.css';
import '../src/styles/global.css';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
