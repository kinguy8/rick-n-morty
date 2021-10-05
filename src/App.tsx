import React from 'react';
import { ApolloProvider } from '@apollo/client';
import './App.css';
import client from './apollo/client/Client';
import GlobalStyle from './components/theme/GlobaStyle';
import Search from './components/Search/Search';
import styled from 'styled-components';
import Reducer from './reducer/Reducer';
import { initState } from './constants/Constants';
import Context from './context/Context';
import ListItems from './components/ListItems/ListItems';
import Party from './components/Party/Party';

const Container = styled.div`
  margin-top: 10vh;
`;

const App: React.FC = () => {
  const [state, dispatch] = React.useReducer(Reducer, initState);
  return (
    <Context.Provider value={{ state, dispatch }}>
      <Container>
        <ApolloProvider client={client}>
          <GlobalStyle />
          <Search />
          <ListItems />
          <Party />
        </ApolloProvider>
      </Container>
    </Context.Provider>
  );
};

export default App;
