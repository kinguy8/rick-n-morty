export interface IArrayItem {
  id?: any;
  name?: string;
  image?: any;
  __typename?: any;
}

export interface IKey {
  key: string | number;
  value: IArrayItem;
  setMorty: (m: string) => void;
  setRick: (r: string) => void;
}

export interface ISearchList {
  test: Array<{}>;
  setMorty: (m: string) => void;
  setRick: (r: string) => void;
  rick: string;
  morty: string;
}

export interface ISearchProps {
  result: Array<{}>;
  setResult: (value: Array<{}>) => void;
}

export interface IParty {
  rick: string;
  morty: string;
}
