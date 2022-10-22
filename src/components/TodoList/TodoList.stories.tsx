import { ComponentMeta, ComponentStoryObj } from '@storybook/react';
import { TodoList } from './TodoList';
import { RelayEnvironmentProvider } from 'react-relay/hooks';
import RelayEnvironment from '../../lib/RelayEnvironment';
import { todoListQueryHandler } from './TodoListQueryHandler';

export default {
  component: TodoList,
  decorators: [
    (Story) => (
      <RelayEnvironmentProvider environment={RelayEnvironment}>
        <Story />
      </RelayEnvironmentProvider>
    ),
  ],
} as ComponentMeta<typeof TodoList>;

export const Default: ComponentStoryObj<typeof TodoList> = {
  args: {},
  parameters: {
    msw: {
      handlers: [todoListQueryHandler({})],
    },
  },
};
