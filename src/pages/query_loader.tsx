import type { NextPage } from 'next';
import { TodosQuery } from '../components/TodoList';
import { TodoListQuery } from '../graphql/__generated__/TodoListQuery.graphql';
import { TodoQueryLoaderList } from '../components/TodoQueryLoaderList/TodoQueryLoaderList';
import { useQueryLoader } from 'react-relay';
import { useEffect, Suspense } from 'react';

const QueryLoader: NextPage = () => {
  const [queryRef, loadTodosQuery] = useQueryLoader<TodoListQuery>(TodosQuery);
  useEffect(() => loadTodosQuery({}), []);

  // こんなことやりたくないっすね
  if (queryRef === undefined || queryRef === null) {
    return (
      <>
        <p>home</p>
        <p>loading...</p>
      </>
    );
  }

  return (
    <>
      <p>home</p>
      <Suspense fallback={<p>loading...</p>}>
        <TodoQueryLoaderList queryRef={queryRef} />
      </Suspense>
    </>
  );
};

// 返却する値をJSON化出来てないので動作しない
/*
export async function getServerSideProps() {
  const queryProps = await fetchQuery<TodoListQuery>(
    RelayEnvironment,
    TodosQuery,
    {},
  );
  const initialRecords = RelayEnvironment.getStore().getSource().toJSON();

  return {
    props: {
      ...queryProps,
      initialRecords,
    },
  };
}
 */

export default QueryLoader;
