import type { NextPage } from 'next';
import { Suspense, useEffect } from 'react';
import fetchGraphQL from '../lib/fetchGraphQL';
import {
  fetchQuery,
  graphql,
  loadQuery,
  PreloadedQuery,
  usePreloadedQuery,
} from 'react-relay';
import RelayEnvironment from '../lib/RelayEnvironment';
import { OperationType } from 'relay-runtime';
import { TodoList, TodosQuery } from '../components/TodoList';

const Home: NextPage = () => {
  // TODO: fetchQueryを検証する
  // TODO: Fragmentを使ったパターンを検証する
  const preloadedQuery = loadQuery(RelayEnvironment, TodosQuery, {});

  return (
    <>
      <p>home</p>
      <Suspense fallback={<p>loading...</p>}>
        <TodoList loadedQuery={preloadedQuery} />
      </Suspense>
    </>
  );
};

export default Home;
