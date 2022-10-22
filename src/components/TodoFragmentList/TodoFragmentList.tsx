import React from 'react';
import { graphql, PreloadedQuery, usePreloadedQuery } from 'react-relay';
import { TodoListQuery } from '../../graphql/__generated__/TodoListQuery.graphql';

interface TodoListProps {
  loadedQuery: PreloadedQuery<TodoListQuery, {}>;
}

// TODO: fragment周りを書く
/*
export const TodosFragment = graphql`
  query TodoListQuery {
    todos {
      id
      title
    }
  }
`;
 */

export const TodoFragmentList: React.FC<TodoListProps> = ({ loadedQuery }) => {
  return (
    <>
      <p>Fragment</p>
    </>
  );
};
