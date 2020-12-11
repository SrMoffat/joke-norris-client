import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import { createHttpLink } from "apollo-link-http";

import LoginPage from "../src/components/LoginPage";
import SignUpPage from "../src/components/SignUpPage";
import JokePage from "../src/components/CategoryJoke";
import RequiresAuth from "../src/components/hoc/requiresAuth";
import App from './App';

import { UserContextProvider, CategoryContextProvider, JokeContextProvider } from "./state";

import './index.css';
require('dotenv').config();

const httpLink = createHttpLink({
  uri: process.env.REACT_APP_SERVER_URL
});
const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <UserContextProvider>
     <CategoryContextProvider>
      <JokeContextProvider>
        <Router>
          <Switch>
            <Route exact path="/" component={LoginPage} />
            <Route exact path="/signup" component={SignUpPage} />
            <RequiresAuth exact path="/home" component={App} />
            <RequiresAuth exact path="/jokes/:category" component={JokePage} />
          </Switch>
        </Router>
      </JokeContextProvider>
     </CategoryContextProvider>
    </UserContextProvider>
  </ApolloProvider>,
  document.getElementById('root')
);
