import React from 'react';
import styled from 'styled-components';
import { useQuery } from '@apollo/client';
import { GET_CHARACTER_LIST } from '../../apollo/gql/gql';

const SearchWrapper = styled.div`
  width: 100%;
  height: 6vh;
`;
const InputText = styled.input`
  width: 100%;
  height: 100%;
  &::placeholder {
    color: green;
  }
  ::placeholder {
  }
  &input[type='text'] {
    margin-left: 5vh;
  }
`;

const Search: React.FC = () => {
  const [search, setSearch] = React.useState<string>('');
  const onChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    console.log('value ', event.target.value);
    setSearch((prev) => event.target.value);
  };
  const { loading, error, data } = useQuery(GET_CHARACTER_LIST, {
    variables: { name: search },
    skip: search.length < 2,
  });
  console.log('data ', data);
  return (
    <SearchWrapper>
      <InputText placeholder="Введите текст" onChange={onChange} value={search} />
    </SearchWrapper>
  );
};

export default Search;
