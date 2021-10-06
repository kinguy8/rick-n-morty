import styled from 'styled-components';

export const Card = styled.div`
  width: calc((100% - 18px * 4) / 4);
  margin-top: 32px;
  margin-right: 24px;
  float: left;
  min-height: 220x;
  height: 220px;
  text-align: center;
  :nth-child(4n + 4) {
    margin-right: 0;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
`;
