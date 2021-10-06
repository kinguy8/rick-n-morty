import React from 'react';
import styled from 'styled-components';
import Context from '../../context/Context';
import Item from '../Item/Item';
import { IArrayItem } from '../../types/Types';
import { buildSearchResultBySize } from '../utils/Utils';

const Result = styled.div`
  width: 810px;
  height: 500px;
  display: flex;
  justify-content: center;
`;

const ListItems: React.FC = () => {
  const context = React.useContext(Context);
  const data: Array<{}> = context.state.data;
  const initArray: Array<{}> = buildSearchResultBySize(data);
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
