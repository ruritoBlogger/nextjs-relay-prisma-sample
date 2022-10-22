import type { NextPage } from 'next';
import React, { Suspense } from 'react';
import { loadQuery } from 'react-relay';
import RelayEnvironment from '../lib/RelayEnvironment';
import {
  TodosFragment,
  TodoFragmentList,
} from '../components/TodoFragmentList';

const Fragments: NextPage = () => {
  // TODO: Fragmentを使ったパターンを検証する
  const preloadedQuery = loadQuery(RelayEnvironment, TodosFragment, {});

  return (
    <>
      <p>fragmentsのサンプル</p>
      <Suspense fallback={<p>loading...</p>}>
        <TodoFragmentList loadedQuery={preloadedQuery} />
      </Suspense>
    </>
  );
};

export default Fragments;
