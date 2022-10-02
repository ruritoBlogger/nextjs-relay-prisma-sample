/**
 * @generated SignedSource<<c3f9bcbb3c96b7f0ec3d595bbcb64e2c>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type pagesTodosQuery$variables = {};
export type pagesTodosQuery$data = {
  readonly todos: ReadonlyArray<{
    readonly content: string;
    readonly id: string;
    readonly title: string;
  }>;
};
export type pagesTodosQuery = {
  response: pagesTodosQuery$data;
  variables: pagesTodosQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "Todo",
    "kind": "LinkedField",
    "name": "todos",
    "plural": true,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "id",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "title",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "content",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "pagesTodosQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "pagesTodosQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "2875df1040c9ae00ef0e40de71bc73a1",
    "id": null,
    "metadata": {},
    "name": "pagesTodosQuery",
    "operationKind": "query",
    "text": "query pagesTodosQuery {\n  todos {\n    id\n    title\n    content\n  }\n}\n"
  }
};
})();

(node as any).hash = "c6e0fa8d069a6eee53cb50d48d47ac75";

export default node;
