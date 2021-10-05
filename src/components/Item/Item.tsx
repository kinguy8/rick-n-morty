import React from 'react';
import { IArrayItem, IKey } from '../../types/Types';

const Item: React.FC<IKey> = (props) => {
  return <h1>{props.value?.name}</h1>;
};

export default Item;
