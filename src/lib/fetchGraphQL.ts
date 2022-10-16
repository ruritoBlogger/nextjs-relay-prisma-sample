import { Variables } from 'relay-runtime';

// TODO: jsonに変換後の内容のバリデーションをやる
async function fetchGraphQL(text: string, variables: Variables): Promise<any> {
  const response = await fetch('http://localhost:3000/api/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: text,
      variables,
    }),
  });

  // Get the response as JSON
  return await response.json();
}

export default fetchGraphQL;
