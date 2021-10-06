import React from 'react';
import Context from '../../context/Context';
import { IContextProps } from '../../types/Types';
import {
  PartyContainer,
  PartyHeaderValue,
  PartyHeader,
  PartyContent,
  PartyCard,
  PartyImg,
  PartyCardTitle,
} from './PartyStyle';

const Party: React.FC = () => {
  console.log('part render');
  const context: IContextProps = React.useContext(Context);
  return (
    <PartyContainer>
      <PartyHeader>
        <PartyHeaderValue>PARTY</PartyHeaderValue>
      </PartyHeader>
      <PartyContent>
        <PartyCard>
          <PartyCardTitle>RICK</PartyCardTitle>
          {context.state.selectedRick && <PartyImg src={context.state.selectedRick} />}
        </PartyCard>
        <PartyCard>
          <PartyCardTitle>MORTY</PartyCardTitle>
          {context.state.selectedMorty && <PartyImg src={context.state.selectedMorty} />}
        </PartyCard>
      </PartyContent>
    </PartyContainer>
  );
};

export default React.memo(Party);
