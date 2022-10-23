import type { NextPage } from 'next';
import { TodoList } from '../components/TodoList';

const Home: NextPage = () => {
  return (
    <>
      <p>home</p>
      <TodoList />
    </>
  );
};

export default Home;
