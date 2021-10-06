import React from 'react';
import { Card, Image, CicleContainer, Cross } from './ItemStyle';
import { IArrayItem, IKey } from '../../types/Types';

const Item: React.FC<IKey> = ({ key, value, setMorty, setRick }) => {
  console.log('Item rerender');
  const selectCard = (value: IArrayItem, event: React.MouseEvent): void => {
    if (value.name?.toLowerCase().includes('Morty'.toLowerCase())) setMorty(value.image);
    if (value.name?.toLowerCase().includes('Rick'.toLowerCase())) setRick(value.image);
  };

  const test = (e: React.MouseEvent): void => {
    e.stopPropagation();
    console.log('delete');
  };

  return (
    <Card key={key} onClick={(e) => selectCard(value, e)}>
      <CicleContainer onClick={test}>
        <Cross>x</Cross>
      </CicleContainer>
      <Image src={value.image} />
    </Card>
  );
};

export default Item;
