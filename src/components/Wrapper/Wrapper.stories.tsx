import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Wrapper from './index';

export default {
  title: 'Wrapper',
  component: Wrapper,
} as ComponentMeta<typeof Wrapper>;

const Template: ComponentStory<typeof Wrapper> = (args) => (
  <Wrapper {...args}>
    <p>This is some content</p>
  </Wrapper>
);

export const Basic = Template.bind({});
