import React from 'react';
import { PartyContainer, PartyHeaderValue, PartyHeader } from './PartyStyle';

const Party: React.FC = () => {
  return (
    <PartyContainer>
      <PartyHeader>
        <PartyHeaderValue>PARTY</PartyHeaderValue>
      </PartyHeader>
    </PartyContainer>
  );
};

export default Party;
