import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_CHARACTER_LIST } from '../../apollo/gql/gql';
import { ISearchProps } from '../../types/Types';
import { SearchWrapper, InputText } from './SearchStyle';

const Search: React.FC<ISearchProps> = ({ setResult }) => {
  console.log('search render');
  const [search, setSearch] = React.useState<string>('');
  const onChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setSearch(event.target.value);
  };
  useQuery(GET_CHARACTER_LIST, {
    variables: { name: search },
    skip: search.length < 2,
    onCompleted: (result) => setResult(result.characters?.results),
    onError: () => setResult([]),
  });

  return (
    <SearchWrapper>
      <InputText placeholder="Поиск" onChange={onChange} value={search} />
    </SearchWrapper>
  );
};

export default React.memo<ISearchProps>(Search, (prevProps, nextProps): boolean => {
  console.log(prevProps, nextProps);
  if (prevProps === nextProps) {
    return true;
  }
  return false;
});
