import React from 'react';
import { ApolloProvider } from '@apollo/client';
import './App.css';
import client from './apollo/client/Client';
import GlobalStyle from './components/theme/GlobaStyle';
import Search from './components/Search/Search';
import styled from 'styled-components';
import Input from './components/Input/Input';

const Container = styled.div`
  margin-top: 5vh;
`;

const App: React.FC = () => {
  const [value, setValue] = React.useState<string>(''); // input value
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
