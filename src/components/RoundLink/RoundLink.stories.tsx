import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import RoundLink from './index';

export default {
  title: 'RoundLink',
  component: RoundLink,
} as ComponentMeta<typeof RoundLink>;

const Template: ComponentStory<typeof RoundLink> = (args) => (
  <RoundLink {...args} />
);

export const Basic = Template.bind({});
Basic.args = {
  iconName: 'social-facebook',
};
