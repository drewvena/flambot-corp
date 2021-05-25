import React, { useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { ApolloProvider } from '@apollo/react-hooks';
import { useQuery } from '@apollo/react-hooks';
import { QUERY_PRODUCTS } from "./utils/queries";
import { UPDATE_PRODUCTS } from "./utils/actions";
import ApolloClient from 'apollo-boost';
// import Home from "./pages/Home";
// import Detail from "./pages/Detail";
// import NoMatch from "./pages/NoMatch";
// import Login from "./pages/Login";
// import Signup from "./pages/Signup";
// import Nav from "./components/Nav";
import { StoreProvider, useStoreContext } from "./utils/GlobalState";
// import Success from "./pages/Success";
// import OrderHistory from "./pages/OrderHistory";
// import { idbPromise } from './utils/helpers';
const client = new ApolloClient({
  request: (operation) => {
    const token = localStorage.getItem('id_token')
    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : ''
      }
    })
  },
  uri: 'localhost:3001/graphql',
});
function App() {
  return (
    <ApolloProvider client={client}>
      <h2>Hello</h2>
    </ApolloProvider>
  );
}
export default App;
