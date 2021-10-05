import React from 'react';
import styled from 'styled-components';
import Context from '../../context/Context';
import Item from '../Item/Item';
import { IArrayItem } from '../../types/Types';

const Result = styled.div`
  width: 810px;
  height: 500px;
`;

const ListItems: React.FC = () => {
  const context = React.useContext(Context);
  const data: Array<{}> = context.state.data;
  const initArray: Array<{}> = [];
  if (data.length) {
    for (let i = 0; i < 6; i++) {
      const randomValue: {} = data[Math.floor(Math.random() * data.length)];
      initArray.push(randomValue);
    }
  }
  console.log('item', initArray);
  return (
    <Result>
      <div className="three-col-grid">
        {initArray.map((value: IArrayItem) => {
          return <Item key={value.id} value={value} />;
        })}
      </div>
    </Result>
  );
};

export default ListItems;
