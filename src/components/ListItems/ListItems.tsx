import React from 'react';
import Item from '../Item/Item';
import { IArrayItem, ISearchList } from '../../types/Types';
import { buildSearchResultBySize } from '../../utils/Utils';
import { Grid } from './ListItemsStyle';

const ListItems: React.FC<ISearchList> = ({ test, setMorty, setRick }) => {
  const data: Array<{}> = test;
  const initArray: Array<{}> = buildSearchResultBySize(data);
  return (
    <Grid>
      {initArray.map((value: IArrayItem) => {
        return <Item key={value.id} value={value} setMorty={setMorty} setRick={setRick} />;
      })}
    </Grid>
  );
};

export default ListItems;
