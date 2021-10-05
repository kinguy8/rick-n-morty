import React from 'react';
import styled from 'styled-components';
import { useQuery } from '@apollo/client';
import { GET_CHARACTER_LIST } from '../../apollo/gql/gql';
import Context from '../../context/Context';
import { IContextProps } from '../../types/Types';
import { TEST } from '../../constants/Constants';

const SearchWrapper = styled.div`
  width: 810px;
  height: 80px;
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
  const ref = React.useRef<Array<any>>();
  const [search, setSearch] = React.useState<string>('');
  const context: IContextProps = React.useContext(Context);
  console.log('state', context.state);
  const onChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setSearch((prev) => event.target.value);
  };
  useQuery(GET_CHARACTER_LIST, {
    variables: { name: search },
    skip: search.length < 2,
    onCompleted: (result) => context.dispatch({ type: TEST, payload: result.characters?.results }),
  });

  return (
    <SearchWrapper>
      <InputText placeholder="Введите текст" onChange={onChange} value={search} />
    </SearchWrapper>
  );
};

export default Search;
