import React from 'react';
import { Card, Image } from './ItemStyle';
import { IArrayItem, IContextProps, IKey } from '../../types/Types';
import Context from '../../context/Context';
import { SELECT_MORTY, SELECT_RICK } from '../../constants/Constants';

const Item: React.FC<IKey> = ({ key, value }) => {
  console.log('render');
  const context: IContextProps = React.useContext(Context);
  const selectCard = (value: IArrayItem): void => {
    if (value.name?.toLowerCase().includes('Morty'.toLowerCase()))
      context.dispatch({ type: SELECT_MORTY, payload: value.image });
    if (value.name?.toLowerCase().includes('Rick'.toLowerCase()))
      context.dispatch({ type: SELECT_RICK, payload: value.image });
  };

  return (
    <Card onClick={() => selectCard(value)}>
      <Image src={value.image} />
    </Card>
  );
};

export default Item;
