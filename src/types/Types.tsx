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
  //setDeleted: (a: any) => void;
  deleted: any;
}

export interface ISearch {
  test: Array<{}>;
  setMorty: (m: string) => void;
  setRick: (r: string) => void;
}

export interface ISearchProps {
  inputValue: string;
}

export interface IParty {
  rick: string;
  morty: string;
}

export interface IInput {
  value: string;
  setValue: (v: string) => void;
}
