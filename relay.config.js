module.exports = {
  // ...
  // Configuration options accepted by the `relay-compiler` command-line tool and `babel-plugin-relay`.
  src: './src',
  language: 'typescript', // "javascript" | "typescript" | "flow"
  schema: './graphql/schema.graphql',
  exclude: [
    '**/node_modules/**',
    '**/__mocks__/**',
    '**/__generated__/**',
    './graphql/dist/**',
    '**/.next/**',
  ],
};
