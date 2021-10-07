import React from 'react';
import Item from '../Item/Item';
import { IArrayItem, ISearch } from '../../types/Types';
import { buildSearchResultBySize } from '../../utils/Utils';
import { Grid } from './ListItemsStyle';

const ListItems: React.FC<ISearch> = ({ test, setMorty, setRick }) => {
  console.log('list items');
  const ref = React.useRef<Array<IArrayItem>>([]);
  //const [deleted, setDeleted] = React.useState<IArrayItem[]>([]);
  //console.log('deleted ', deleted);
  const data: Array<{}> = test;
  const initArray: Array<{}> = buildSearchResultBySize(data);
  return (
    <Grid>
      {initArray.map((value: IArrayItem) => {
        return (
          <Item key={value.id} value={value} setMorty={setMorty} setRick={setRick} deleted={ref} />
        );
      })}
    </Grid>
  );
};
export default React.memo(ListItems);
