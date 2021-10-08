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
  newData: (a: any) => void;
  setSize: (a: any) => void;
}

export interface ISearch {
  result: Array<{}>;
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

export interface IModalProps {
  active: boolean;
  setActive: (v: boolean) => void;
  history?: Array<IArrayItem>;
}

export interface IModalStyledProps {
  active: boolean;
}

export interface IModalCard {
  name: string;
  image: string;
}
