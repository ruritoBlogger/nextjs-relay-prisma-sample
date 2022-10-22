import { ComponentMeta, ComponentStoryObj } from '@storybook/react';
import { TodoFragmentList } from './TodoFragmentList';

export default {
  component: TodoFragmentList,
} as ComponentMeta<typeof TodoFragmentList>;

export const Default: ComponentStoryObj<typeof TodoFragmentList> = {
  args: {},
};
