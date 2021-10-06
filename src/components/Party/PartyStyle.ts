import styled from 'styled-components';

export const PartyContainer = styled.div`
  margin: 10vh;
`;

export const PartyHeader = styled.div`
  display: flex;
  justify-content: center;
`;

export const PartyHeaderValue = styled.h1``;

export const PartyContent = styled.div`
  width: 390px;
  margin: 0 auto;
  display: flex;
  margin-top: 30px;
`;

export const PartyCard = styled.div`
  width: 1800px;
  height: 220px;
  background-color: #dadada;
  position: relative;
  &:nth-child(2) {
    margin-left: 30px;
  }
  &::hover {
    cursor: pointer;
  }
`;

export const PartyCardTitle = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 150px;
  color: white;
`;

export const PartyImg = styled.img`
  width: 100%;
  height: 100%;
`;
