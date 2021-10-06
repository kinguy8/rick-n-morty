import { IState } from '../types/Types';
export const TEST = 'TEST';
export const SELECT_MORTY = 'SELECT_MORTY';
export const SELECT_RICK = 'SELECT_RICK';

export const initState: IState = {
  data: [],
  message: '',
  selectedRick: '',
  selectedMorty: '',
};
