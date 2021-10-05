import { TEST } from '../constants/Constants';
import { IState, IActionType } from '../types/Types';

function Reducer(state: IState, action: IActionType): IState {
  switch (action.type) {
    case TEST:
      return {
        data: action.payload,
        message: 'Дата получена',
      };
    default:
      return state;
  }
}

export default Reducer;
