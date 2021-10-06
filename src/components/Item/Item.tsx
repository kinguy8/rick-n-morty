import React from 'react';
import { Card, Image, CicleContainer, Cross } from './ItemStyle';
import { IArrayItem, IKey } from '../../types/Types';

const Item: React.FC<IKey> = ({ key, value, setMorty, setRick }) => {
  const selectCard = (value: IArrayItem): void => {
    if (value.name?.toLowerCase().includes('Morty'.toLowerCase())) setMorty(value.image);
    if (value.name?.toLowerCase().includes('Rick'.toLowerCase())) setRick(value.image);
  };

  const test = (): void => {
    console.log('delete');
  };
  return (
    <Card key={key} onClick={() => selectCard(value)}>
      <CicleContainer onClick={test}>
        <Cross>x</Cross>
      </CicleContainer>
      <Image src={value.image} />
    </Card>
  );
};

export default Item;
