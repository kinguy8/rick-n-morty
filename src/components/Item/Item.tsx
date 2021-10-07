import React from 'react';
import { Card, Image, CicleContainer, Cross } from './ItemStyle';
import { IArrayItem, IKey } from '../../types/Types';

const Item: React.FC<IKey> = ({ key, value, setMorty, setRick, deleted }) => {
  console.log('Item rerender');
  const selectCard = (value: IArrayItem, event: React.MouseEvent): void => {
    if (value.name?.toLowerCase().includes('Morty'.toLowerCase())) setMorty(value.image);
    if (value.name?.toLowerCase().includes('Rick'.toLowerCase())) setRick(value.image);
  };

  const deleteCard = (e: React.MouseEvent, value: IArrayItem): void => {
    e.stopPropagation();
    console.log('delete', value);
    console.log('ref.current ', deleted.current);
    deleted.current.push('123');
    //deleted((prev: any) => ['asd', ...prev]);
  };
  return (
    <Card key={key} onClick={(e) => selectCard(value, e)}>
      <CicleContainer onClick={(e) => deleteCard(e, value)}>
        <Cross>x</Cross>
      </CicleContainer>
      <Image src={value.image} />
    </Card>
  );
};

export default Item;
