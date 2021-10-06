import { IArrayItem } from '../../types/Types';

/*
 * Method for creation new array for display
 */
export const buildSearchResultBySize = (data: Array<{}>, size = 7): Array<{}> => {
  const initArray: Array<{}> = [];
  if (data.length) {
    for (let i = 0; i < size; i++) {
      const asd = (newData: Array<{}>): void => {
        const randomValue: IArrayItem = _randomValue(newData);
        if (initArray.includes(randomValue)) {
          const index = newData.findIndex((item: IArrayItem) => item.name === randomValue.name);
          //asd(newData.splice(index, 1));
        } else {
          initArray.push(randomValue);
        }
      };
      asd(data);
    }
  }
  return initArray;
};

const _randomValue = (data: Array<{}>): {} => {
  const randomValue: number = Math.floor(Math.random() * data.length);
  return data[randomValue];
};
