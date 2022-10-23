/*
import { InnerTodoList, TodosQuery } from './TodoList';
import { QueryRenderer } from 'react-relay';
import { createMockEnvironment, MockPayloadGenerator } from 'relay-test-utils';

const env = createMockEnvironment();
env.mock.resolveMostRecentOperation((operation) =>
  MockPayloadGenerator.generate(operation),
);
export default {
  component: InnerTodoList,
  decorators: [
    (Story) => (
      <QueryRenderer
        environment={env}
        query={TodosQuery}
        render={({ error, props }) => <Story args={{ loadedQuery: props }} />}
        variables={{}}
      />
    ),
  ],
} as ComponentMeta<typeof InnerTodoList>;

export const Default: ComponentStoryObj<typeof InnerTodoList> = {
  args: {},
};
 */
export default {};
