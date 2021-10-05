import React from 'react';
import { Card, Image } from './ItemStyle';
import { IKey } from '../../types/Types';

const Item: React.FC<IKey> = (props) => {
  return (
    <Card>
      <Image src={props.value.image} />
    </Card>
  );
};

export default Item;
