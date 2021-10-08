import React from 'react';
import { ModalWindow, ModalContent } from './ModalStyle';
import { IArrayItem, IModalProps } from '../../types/Types';
import ModalCard from '../ModalCard/ModalCard';

const Modal: React.FC<IModalProps> = ({ active, setActive, history }) => {
  return (
    <ModalWindow onClick={() => setActive(false)} active={active}>
      <ModalContent onClick={(e) => e.stopPropagation()} active={active}>
        {history?.map((item: IArrayItem) => {
          return <ModalCard image={item.image} name={item.name!} key={item.id} />;
        })}
      </ModalContent>
    </ModalWindow>
  );
};

export default Modal;
