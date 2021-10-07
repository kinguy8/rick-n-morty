import React from 'react';
import { ApolloProvider } from '@apollo/client';
import './App.css';
import client from './apollo/client/Client';
import GlobalStyle from './components/theme/GlobaStyle';
import Search from './components/Search/Search';
import styled from 'styled-components';
import ListItems from './components/ListItems/ListItems';
import Party from './components/Party/Party';
import Input from './components/Input/Input';

const Container = styled.div`
  margin-top: 10vh;
`;

const App: React.FC = () => {
  const [value, setValue] = React.useState<string>('');
  return (
    <Container>
      <ApolloProvider client={client}>
        <GlobalStyle />
        <Input value={value} setValue={setValue} />
        <Search inputValue={value} />
      </ApolloProvider>
    </Container>
  );
};

export default App;
//
//
