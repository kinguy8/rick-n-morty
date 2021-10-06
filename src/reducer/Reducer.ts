import { TEST, SELECT_MORTY, SELECT_RICK } from '../constants/Constants';
import { IState, IActionType } from '../types/Types';

function Reducer(state: IState, action: IActionType): IState {
  switch (action.type) {
    case TEST:
      return {
        ...state,
        data: action.payload,
      };
    case SELECT_MORTY:
      return {
        ...state,
        selectedMorty: action.payload,
      };
    case SELECT_RICK:
      return {
        ...state,
        selectedRick: action.payload,
      };
    default:
      return state;
  }
}

export default Reducer;
