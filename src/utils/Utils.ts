import { IArrayItem } from '../types/Types';

/*
 * Method for creation new array of pictures for dispay
 */
export const buildSearchResultBySize = (
  data: Array<{}>,
  size: number,
  newArray: number
): Array<{}> => {
  const initArray: Array<{}> = [];
  if (data.length) {
    for (let i = 0; i < size - newArray; i++) {
      // const reSearch = (newData: Array<{}>): void => {
      //   const randomValue: IArrayItem = _randomValue(newData);
      //   if (initArray.includes(randomValue)) {
      //     reSearch(newData);
      //   } else {
      //     initArray.push(randomValue);
      //   }
      // };
      // reSearch(data);
      initArray.push(data[i]);
    }
  }
  return initArray;
};

export const getDifference = (
  fullSearch: IArrayItem[],
  deletedCards: IArrayItem[]
): IArrayItem[] => {
  const difference = fullSearch.filter(
    ({ id: id1 }) => !deletedCards.some(({ id: id2 }) => id2 === id1)
  );
  return difference;
};

// const _randomValue = (data: Array<{}>): {} => {
//   const randomValue: number = Math.floor(Math.random() * data.length);
//   return data[randomValue];
// };
