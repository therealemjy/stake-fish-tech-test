import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Palette from '../../constants/palette';
import Icon from './index';

export default {
  title: 'Icon',
  component: Icon,
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  name: 'arrow-left',
};

export const Custom = Template.bind({});
Custom.args = {
  name: 'arrow-left',
  size: 24,
  color: Palette.toxicGreen,
};
