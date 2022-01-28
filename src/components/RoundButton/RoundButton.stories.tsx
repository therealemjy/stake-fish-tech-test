import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import RoundButton from './index';

export default {
  title: 'RoundButton',
  component: RoundButton,
} as ComponentMeta<typeof RoundButton>;

const Template: ComponentStory<typeof RoundButton> = (args) => (
  <RoundButton {...args} />
);

export const Basic = Template.bind({});
Basic.args = {
  iconName: 'social-facebook',
};
