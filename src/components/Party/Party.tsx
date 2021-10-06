import React from 'react';
import { IParty } from '../../types/Types';
import { RICK, MORTY, PARTY } from '../../constants/Constants';
import {
  PartyContainer,
  PartyHeaderValue,
  PartyHeader,
  PartyContent,
  PartyCard,
  PartyImg,
  PartyCardTitle,
} from './PartyStyle';

const Party: React.FC<IParty> = ({ rick, morty }) => {
  console.log('part render');
  return (
    <PartyContainer>
      <PartyHeader>
        <PartyHeaderValue>{PARTY}</PartyHeaderValue>
      </PartyHeader>
      <PartyContent>
        <PartyCard>
          {!rick && <PartyCardTitle>{RICK}</PartyCardTitle>}
          {rick && <PartyImg src={rick} />}
        </PartyCard>
        <PartyCard>
          {!morty && <PartyCardTitle>{MORTY}</PartyCardTitle>}
          {morty && <PartyImg src={morty} />}
        </PartyCard>
      </PartyContent>
    </PartyContainer>
  );
};

export default React.memo(Party);
