import React from 'react';
import ReactDOM from 'react-dom';

import { InMemoryCache } from '@apollo/client';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import AppRouter from './modules/router/router';

console.log( process.env.PORT,'process.env.PORT app');

const client = new ApolloClient({
  uri: `http://localhost:${process.env.PORT || 4000}/graphql`,
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <AppRouter />
  </ApolloProvider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
