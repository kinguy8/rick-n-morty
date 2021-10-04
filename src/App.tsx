import React from 'react';
import { ApolloProvider } from '@apollo/client';
import './App.css';
import client from './apollo/client/Client';
import GlobalStyle from './components/theme/GlobaStyle';
import Search from './components/Search/Search';
import styled from 'styled-components';

const Container = styled.div`
  margin-top: 10vh;
`;

const App: React.FC = () => {
  return (
    <Container>
      <ApolloProvider client={client}>
        <GlobalStyle />
        <Search />
      </ApolloProvider>
    </Container>
  );
};

export default App;
