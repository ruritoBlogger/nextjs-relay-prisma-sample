import React, { Suspense } from 'react';
import {
  graphql,
  loadQuery,
  PreloadedQuery,
  usePreloadedQuery,
} from 'react-relay';
import { TodoListQuery } from '../../graphql/__generated__/TodoListQuery.graphql';
import RelayEnvironment from '../../lib/RelayEnvironment';

interface TodoListProps {
  loadedQuery: PreloadedQuery<TodoListQuery, {}>;
}

export const TodosQuery = graphql`
  query TodoListQuery {
    todos {
      id
      title
      content
    }
  }
`;

export const TodoList: React.FC = () => {
  const preloadedQuery = loadQuery<TodoListQuery>(
    RelayEnvironment,
    TodosQuery,
    {},
  );
  return (
    <Suspense fallback={<p>loading...</p>}>
      <InnerTodoList loadedQuery={preloadedQuery} />
    </Suspense>
  );
};

export const InnerTodoList: React.FC<TodoListProps> = ({ loadedQuery }) => {
  const data = usePreloadedQuery(TodosQuery, loadedQuery);

  return (
    <>
      {data.todos.map((todo) => (
        <div key={todo.id}>
          <p>{todo.id}</p>
          <p>{todo.title}</p>
          <p>{todo.content}</p>
        </div>
      ))}
    </>
  );
};
