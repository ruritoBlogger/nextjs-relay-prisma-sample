import React from 'react';
import { graphql, PreloadedQuery, usePreloadedQuery } from 'react-relay';
import { TodoListQuery } from '../../graphql/__generated__/TodoListQuery.graphql';

interface TodoListProps {
  loadedQuery: PreloadedQuery<TodoListQuery, {}>;
}

// TODO: fragment周りを書く
export const TodosFragment = graphql`
  query TodoListQuery {
    todos {
      id
      title
      content
    }
  }
`;

export const TodoFragmentList: React.FC<TodoListProps> = ({ loadedQuery }) => {
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
