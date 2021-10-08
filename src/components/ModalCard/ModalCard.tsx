import React from 'react';
import { IModalCard } from '../../types/Types';
import { DeletedCard, DeletedCardImg, DeletedCardName } from './ModalCardStyle';

const ModalCard: React.FC<IModalCard> = ({ image, name }) => {
  return (
    <DeletedCard>
      <DeletedCardImg src={image} />
      <DeletedCardName>{name}</DeletedCardName>
    </DeletedCard>
  );
};
export default ModalCard;
