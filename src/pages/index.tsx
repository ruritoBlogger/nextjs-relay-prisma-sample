import type { NextPage } from 'next';
import { Suspense, useEffect } from 'react';
import fetchGraphQL from '../lib/fetchGraphQL';
import { graphql, loadQuery, usePreloadedQuery } from 'react-relay';
import RelayEnvironment from '../lib/RelayEnvironment';

const TodosQuery = graphql`
  query pagesTodosQuery {
    todos {
      id
      title
      content
    }
  }
`;

const Home: NextPage = () => {
  // TODO: react render関数の中で定義しちゃダメらしいので移行先探す
  const preloadedQuery = loadQuery(RelayEnvironment, TodosQuery, {});
  const data = usePreloadedQuery(TodosQuery, preloadedQuery);

  console.log(data);
  return (
    <>
      <p>home</p>
      <Suspense fallback={<p>loading...</p>}>
        {data.todos.map((todo) => (
          <div key={todo.id}>
            <p>{todo.id}</p>
            <p>{todo.title}</p>
            <p>{todo.content}</p>
          </div>
        ))}
      </Suspense>
    </>
  );
};

export default Home;
