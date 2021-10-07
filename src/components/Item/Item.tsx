import React from 'react';
import { Card, Image, CicleContainer, Cross } from './ItemStyle';
import { IArrayItem, IKey } from '../../types/Types';

const Item: React.FC<IKey> = ({ key, value, setMorty, setRick, newData, setMyTest }) => {
  const selectCard = (value: IArrayItem): void => {
    if (value.name?.toLowerCase().includes('Morty'.toLowerCase())) setMorty(value.image);
    if (value.name?.toLowerCase().includes('Rick'.toLowerCase())) setRick(value.image);
  };

  const deleteCard = (e: React.MouseEvent, value: IArrayItem): void => {
    e.stopPropagation();
    newData((prev: []) => [value, ...prev]);
    setMyTest((prev: []) => [value, ...prev]); // ?.__.?
  };
  return (
    <Card key={key} onClick={() => selectCard(value)}>
      <CicleContainer onClick={(e) => deleteCard(e, value)}>
        <Cross>x</Cross>
      </CicleContainer>
      <Image src={value.image} />
    </Card>
  );
};

export default Item;
