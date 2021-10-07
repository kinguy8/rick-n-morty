import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_CHARACTER_LIST } from '../../apollo/gql/gql';
import { IArrayItem, ISearchProps } from '../../types/Types';
import ListItems from '../ListItems/ListItems';
import Party from '../Party/Party';

const Search: React.FC<ISearchProps> = ({ inputValue }) => {
  console.log('search');
  const [rick, setRick] = React.useState<string>('');
  const [morty, setMorty] = React.useState<string>('');
  const [result, setResult] = React.useState<Array<{}>>([]);
  useQuery(GET_CHARACTER_LIST, {
    variables: { name: inputValue },
    skip: inputValue.length < 2,
    onCompleted: (result) => setResult(result.characters?.results),
    onError: () => setResult([]),
  });

  return (
    <>
      <ListItems test={result} setRick={setRick} setMorty={setMorty} />
      <Party morty={morty} rick={rick} />
    </>
  );
};

export default React.memo(Search);
