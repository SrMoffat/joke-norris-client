import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { createHttpLink } from "apollo-link-http";
import App from './App';
import './index.css';
import dotenv from "dotenv";
dotenv.config();

const httpLink = createHttpLink({
  uri: process.env.SERVER_URL
});
const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);
