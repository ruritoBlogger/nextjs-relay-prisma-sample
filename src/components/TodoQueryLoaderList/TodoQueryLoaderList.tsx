import { graphql, PreloadedQuery, usePreloadedQuery } from 'react-relay';
import { TodoListQuery } from '../../graphql/__generated__/TodoListQuery.graphql';

interface TodoQueryLoaderListProps {
  queryRef: PreloadedQuery<TodoListQuery, {}>;
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

export const TodoQueryLoaderList: React.FC<TodoQueryLoaderListProps> = ({
  queryRef,
}) => {
  const data = usePreloadedQuery<TodoListQuery>(TodosQuery, queryRef);

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
