import styled from 'styled-components';

export const Card = styled.div`
  width: 180px;
  margin-top: 30px;
  min-height: 220x;
  margin-left: 30px;
  height: 220px;
  position: relative;
  z-index: 0;
  :nth-child(5) {
    grid-column: 2;
  }
  :nth-child(1) {
    margin-left: 0;
  }
  &:hover {
    cursor: pointer;
    opacity: 0.7;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
`;

export const CicleContainer = styled.div`
  background-color: white;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
  -khtml-border-radius: 50%;
  position: absolute;
  z-index: 10;
  top: 10px;
  left: 135px;
  display: flex;
  justify-content: center;
  &:hover {
    cursor: pointer;
  }
`;

export const Cross = styled.div`
  display: flex;
  align-items: center;
  font-size: 15px;
`;
