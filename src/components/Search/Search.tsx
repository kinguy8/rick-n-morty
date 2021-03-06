import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_CHARACTER_LIST } from '../../apollo/gql/gql';
import { ISearchProps } from '../../types/Types';
import ListItems from '../ListItems/ListItems';
import Party from '../Party/Party';

const Search: React.FC<ISearchProps> = ({ inputValue }) => {
  const [rick, setRick] = React.useState<string>(''); // selected rick data
  const [morty, setMorty] = React.useState<string>(''); // selected morty data
  const [result, setResult] = React.useState<Array<{}>>([]); // data of search result
  useQuery(GET_CHARACTER_LIST, {
    variables: { name: inputValue },
    skip: inputValue.length < 2,
    onCompleted: (result) => setResult(result.characters.results),
    onError: () => setResult([]),
    pollInterval: 300,
  });

  return (
    <>
      <ListItems result={result} setRick={setRick} setMorty={setMorty} />
      <Party morty={morty} rick={rick} />
    </>
  );
};

export default React.memo(Search);
