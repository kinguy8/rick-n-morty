import React from 'react';
import { InputText, SearchWrapper } from '../Input/InputStyle';
import { IInput } from '../../types/Types';

const Input: React.FC<IInput> = ({ value, setValue }) => {
  const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setValue(e.target.value);
  };
  return (
    <SearchWrapper>
      <InputText onChange={(e) => onChange(e)} value={value} />
    </SearchWrapper>
  );
};

export default Input;
