import { ComponentMeta, ComponentStoryObj } from '@storybook/react';
import { TodoList } from './TodoList';

export default {
  component: TodoList,
} as ComponentMeta<typeof TodoList>;

export const Default: ComponentStoryObj<typeof TodoList> = {
  args: {},
};
