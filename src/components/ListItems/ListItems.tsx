import React from 'react';
import styled from 'styled-components';
import Context from '../../context/Context';
import Item from '../Item/Item';
import { IArrayItem } from '../../types/Types';

const Result = styled.div`
  margin-top: 10vh;
  width: 810px;
  height: 80px;
`;

const ListItems: React.FC = () => {
  const context = React.useContext(Context);
  const data: Array<{}> = context.state.data;
  return (
    <Result>
      {data.map((value: IArrayItem) => {
        return <Item key={value.id} value={value} />;
      })}
    </Result>
  );
};

export default ListItems;
