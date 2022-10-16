import React from 'react';
import { graphql, PreloadedQuery, usePreloadedQuery } from 'react-relay';
import { OperationType } from 'relay-runtime';

interface TodoListProps {
  loadedQuery: PreloadedQuery<OperationType, {}>;
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

export const TodoList: React.FC<TodoListProps> = ({ loadedQuery }) => {
  // TODO: validationしたい
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
