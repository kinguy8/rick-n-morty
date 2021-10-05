import React from 'react';
import { IContextProps, IState } from '../types/Types';
import { initState } from '../constants/Constants';

const Context = React.createContext<{ state: IState; dispatch: React.Dispatch<any> }>({
  state: initState,
  dispatch: () => null,
});

export default Context;
