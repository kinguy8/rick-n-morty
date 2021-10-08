import React from 'react';
import Item from '../Item/Item';
import { IArrayItem, ISearch } from '../../types/Types';
import { buildSearchResultBySize, getDifference } from '../../utils/Utils';
import { Grid, OpenModal } from './ListItemsStyle';
import Modal from '../Modal/Modal';
import { OPEN_DELETED_CARDS } from '../../constants/Constants';

const ListItems: React.FC<ISearch> = ({ result, setMorty, setRick }) => {
  const [history, setHistory] = React.useState<Array<IArrayItem>>([]); // List of deleted data
  const [size, setSize] = React.useState<Array<IArrayItem>>([]);
  const [active, setActive] = React.useState<boolean>(false);
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
    <>
      {history.length ? (
        <OpenModal onClick={() => setActive(true)}>{OPEN_DELETED_CARDS}</OpenModal>
      ) : null}
      <Grid>
        {active && <Modal active={active} setActive={setActive} history={history} />}
        {ref.current.map((value: IArrayItem) => {
          return (
            <Item
              key={value.id}
              value={value}
              setMorty={setMorty}
              setRick={setRick}
              newData={setHistory}
              setSize={setSize}
            />
          );
        })}
      </Grid>
    </>
  );
};
export default React.memo(ListItems);
