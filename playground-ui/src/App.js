import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './components/Home';
import Callback from './components/Callback';
import { ApolloProvider } from 'react-apollo'
import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { setContext } from 'apollo-link-context';
import { InMemoryCache } from 'apollo-cache-inmemory'
import Logout from './components/Logout';
import Posts from './components/Posts';
import {
  getGraphCoolToken,
} from './utils/AuthService';

const httpLink = new HttpLink({ uri: 'https://api.graph.cool/simple/v1/cjo0tp8ta5vd40194mfn816ts' })

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      authorization: getGraphCoolToken() ? `Bearer ${getGraphCoolToken()}` : "",
    }
  }
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
})

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <BrowserRouter>
          <div>
            <Route exact path='/' component={Home} />
            <Route path='/callback' component={Callback} />
            <Route path='/logout' component={Logout} />
            <Route path='/posts' component={Posts} />
          </div>
        </BrowserRouter>
      </ApolloProvider>
    );
  }
}

export default App;
