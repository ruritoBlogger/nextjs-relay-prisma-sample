import { graphql } from 'msw';
import { GraphQLError } from 'graphql/error';

interface TodoListQueryHandlerInput {
  errors?: string;
}

export const todoListQueryHandler = ({ errors }: TodoListQueryHandlerInput) => {
  return graphql.query('TodoListQuery', (req, res, ctx) => {
    // TODO: errorの型情報が確定したら、それに合わせて返却する値も調整する
    if (errors) {
      return res(ctx.errors([new GraphQLError('error!!!')]));
    }

    return res(
      ctx.data({
        todos: {
          id: 1,
          title: 'test title',
          content: 'test content',
        },
      }),
    );
  });
};
