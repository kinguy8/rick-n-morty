import styled from 'styled-components';
import { IModalStyledProps } from '../../types/Types';

export const ModalWindow = styled.div<IModalStyledProps>`
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 1;
  pointer-events: 'all';
  transition: 0.5;
  position: absolute;
  z-index: 10;
`;

export const ModalContent = styled.div<IModalStyledProps>`
  padding: 20px;
  border-radius: 12px;
  background-color: white;
  height: 600px;
  width: 300px;
  transition: 0.4s all;
  transform: 'scale(1)';
  overflow-y: scroll;
`;
