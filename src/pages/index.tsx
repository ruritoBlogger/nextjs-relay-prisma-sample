import type { NextPage } from 'next';
import { useEffect } from 'react';
import fetchGraphQL from '../lib/fetchGraphQL';

const Home: NextPage = () => {
  useEffect(() => {
    let isMounted = true;
    fetchGraphQL(
      `
      query todos {
        todo {
          id
          title
          content
        }
      }
    `,
      {},
    ).then((response) => {
      // Avoid updating state if the component unmounted before the fetch completes
      if (!isMounted) {
        return;
      }
      const data = response.data;

      console.log(data);
    });
  });
  return (
    <>
      <p>home</p>
    </>
  );
};

export default Home;
