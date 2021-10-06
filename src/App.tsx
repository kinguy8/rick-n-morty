import React from 'react';
import { ApolloProvider } from '@apollo/client';
import './App.css';
import client from './apollo/client/Client';
import GlobalStyle from './components/theme/GlobaStyle';
import Search from './components/Search/Search';
import styled from 'styled-components';
import ListItems from './components/ListItems/ListItems';
import Party from './components/Party/Party';

const Container = styled.div`
  margin-top: 10vh;
`;

const App: React.FC = () => {
  const [value, setValue] = React.useState<Array<{}>>([]);
  const [rick, setRick] = React.useState<string>('');
  const [morty, setMorty] = React.useState<string>('');

  return (
    <Container>
      <ApolloProvider client={client}>
        <GlobalStyle />
        <Search result={value} setResult={setValue} />
        <ListItems test={value} setRick={setRick} setMorty={setMorty} rick={rick} morty={morty} />
        <Party morty={morty} rick={rick} />
      </ApolloProvider>
    </Container>
  );
};

export default App;
