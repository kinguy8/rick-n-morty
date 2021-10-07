import React from 'react';
import Item from '../Item/Item';
import { IArrayItem, ISearch } from '../../types/Types';
import { buildSearchResultBySize, getDifference } from '../../utils/Utils';
import { Grid } from './ListItemsStyle';

const ListItems: React.FC<ISearch> = ({ result, setMorty, setRick }) => {
  const [history, setHistory] = React.useState<Array<IArrayItem>>([]);
  const [size, setSize] = React.useState<Array<IArrayItem>>([]);
  const ref = React.useRef<Array<IArrayItem>>();
  let data: IArrayItem[] = result;
  if (history.length) {
    data = getDifference(result, history);
  }
  ref.current = buildSearchResultBySize(data, 6, size.length);
  React.useEffect(() => {
    setSize([]);
  }, [result]);
  return (
    <Grid>
      {ref.current.map((value: IArrayItem) => {
        return (
          <Item
            key={value.id}
            value={value}
            setMorty={setMorty}
            setRick={setRick}
            newData={setHistory}
            setMyTest={setSize}
          />
        );
      })}
    </Grid>
  );
};
export default React.memo(ListItems);
