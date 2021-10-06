import React from 'react';

export interface IState {
  data: Array<{} | string>;
  message: string;
  selectedRick: string;
  selectedMorty: string;
}

export interface IActionType {
  type: string;
  payload: any;
}

export interface IContextProps {
  state: IState;
  dispatch: React.Dispatch<IActionType>;
}

export interface IArrayItem {
  id?: any;
  name?: string;
  image?: any;
  __typename?: any;
}

export interface IKey {
  key: string | number;
  value: IArrayItem;
}
