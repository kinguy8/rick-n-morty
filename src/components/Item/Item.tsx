import React from 'react';
import { Card, Image } from './ItemStyle';
import { IArrayItem, IKey } from '../../types/Types';

const Item: React.FC<IKey> = ({ key, value, setMorty, setRick }) => {
  console.log('render');
  const selectCard = (value: IArrayItem): void => {
    if (value.name?.toLowerCase().includes('Morty'.toLowerCase())) setMorty(value.image);
    if (value.name?.toLowerCase().includes('Rick'.toLowerCase())) setRick(value.image);
  };

  return (
    <Card key={key} onClick={() => selectCard(value)}>
      <Image src={value.image} />
    </Card>
  );
};

export default Item;
