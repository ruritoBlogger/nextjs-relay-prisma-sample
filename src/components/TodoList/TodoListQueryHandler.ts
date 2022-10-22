import { graphql } from 'msw';
import { GraphQLError } from 'graphql/error';
import {
  TodoListQuery,
  TodoListQuery$data,
  TodoListQuery$variables,
} from '../../graphql/__generated__/TodoListQuery.graphql';

interface TodoListQueryHandlerInput {
  todos?: TodoListQuery$data;
  errors?: string;
}

export const todoListQueryHandler = ({
  todos,
  errors,
}: TodoListQueryHandlerInput) => {
  return graphql.query<TodoListQuery$data, TodoListQuery$variables>(
    'TodoListQuery',
    (req, res, ctx) => {
      // TODO: errorの型情報が確定したら、それに合わせて返却する値も調整する
      if (errors) {
        return res(ctx.errors([new GraphQLError(errors)]));
      }

      if (todos) {
        return res(ctx.data(todos));
      }

      return res(
        ctx.data({
          todos: [
            {
              id: '1',
              title: 'test title',
              content: 'test content',
            },
          ],
        }),
      );
    },
  );
};
