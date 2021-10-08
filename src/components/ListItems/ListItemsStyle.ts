import styled from 'styled-components';

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`;

export const OpenModal = styled.button`
  border: none;
  outline: none;
  font-size: 14px;
  height: 3vh;
  width: 300px;
  margin-left: 260px;
  margin-top: 3vh;
  border-radius: 6px;
  background-color: #d94640;
  color: white;
  opacity: 0.9;
  &:hover {
    cursor: pointer;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  }
`;
