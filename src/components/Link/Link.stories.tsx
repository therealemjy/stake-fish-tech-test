import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Link from './index';

export default {
  title: 'Link',
  component: Link,
} as ComponentMeta<typeof Link>;

const Template: ComponentStory<typeof Link> = (args) => <Link {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  label: 'Link',
  to: '/',
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  label: 'Link',
  to: '/',
  iconName: 'arrow-left',
};
