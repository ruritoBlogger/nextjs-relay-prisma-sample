import type { NextPage } from 'next';
import { TodoList } from '../components/TodoList';

const Home: NextPage = () => {
  // TODO: fetchQueryを検証する
  return (
    <>
      <p>home</p>
      <TodoList />
    </>
  );
};

export default Home;
