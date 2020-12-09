import dotenv from "dotenv";
import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import { createHttpLink } from "apollo-link-http";

import LoginPage from "../src/components/LoginPage";
import SignUpPage from "../src/components/SignUpPage";
import App from './App';
import './index.css';
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
    <Router>
      <Switch>
        <Route exact path="/" component={LoginPage} />
        <Route exact path="/signup" component={SignUpPage} />
        <Route exact path="/home" component={App} />
      </Switch>
    </Router>
  </ApolloProvider>,
  document.getElementById('root')
);
