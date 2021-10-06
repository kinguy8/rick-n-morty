import { IArrayItem } from '../types/Types';

/*
 * Method for creation new array for display
 */
export const buildSearchResultBySize = (data: Array<{}>, size = 6): Array<{}> => {
  const initArray: Array<{}> = [];
  if (data.length) {
    for (let i = 0; i < size; i++) {
      const reSearch = (newData: Array<{}>): void => {
        const randomValue: IArrayItem = _randomValue(newData);
        if (initArray.includes(randomValue)) {
          reSearch(newData);
        } else {
          initArray.push(randomValue);
        }
      };
      reSearch(data);
    }
  }
  return initArray;
};

const _randomValue = (data: Array<{}>): {} => {
  const randomValue: number = Math.floor(Math.random() * data.length);
  return data[randomValue];
};
