import { TEST } from '../constants/Constants';

export const addItems = (items: Array<{}>) => {
  console.log('items ', items);
  return {
    type: TEST,
    payload: items,
  };
};
