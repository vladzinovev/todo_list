import { Dispatch, SetStateAction } from "react";

export interface IStoreContext {
  newsOpen: boolean;
  setNewsOpen: Dispatch<SetStateAction<boolean>>;
  oldTodoOpen: boolean;
  setOldTodoOpen: Dispatch<SetStateAction<boolean>>;
  setChecked: Dispatch<SetStateAction<boolean>>;
  checked: boolean;
  todayTodo: ITodo[];
  setTodayTodo: Dispatch<SetStateAction<ITodo[]>>;
  oldTodo: ITodo[];
  setOldTodo: Dispatch<SetStateAction<ITodo[]>>;
  newTodo: ITodo[];
  setNewTodo: Dispatch<SetStateAction<ITodo[]>>;
  id: number;
  setId: Dispatch<SetStateAction<number>>;
}

export interface ITodo {
  id: number;
  open: boolean;
  date: string;
  title: string;
  descr: string;
  selected: string;
  switched: boolean;
}

export interface ITitle {
  value: string;
  isEmpty: boolean;
  minLengthError: boolean;
  maxLengthError: boolean;
  inputValid: boolean;
  isDirty: boolean;
  onChange?: any;
  onBlur?: any;
}

export interface IInput {
  idLabel: string;
  type: string;
  title?: ITitle;
}
export interface ISwitch {
  active: boolean;
  setBoolean: Dispatch<SetStateAction<boolean>> | undefined;
  todoNow: ITodo[] | undefined;
  setTodo: Dispatch<SetStateAction<ITodo[]>> | undefined;
  keyId: number | undefined;
}

export interface IDays {
  todoDay: ITodo[];
  setTodoDay: Dispatch<SetStateAction<ITodo[]>>;
}

export interface IUiOpen extends IDays {
  td: ITodo;
}

export interface IItem extends IUiOpen {
  key: number;
}

export interface IItemTodo {
  todo: ITodo;
  key: number;
  todoNow: ITodo[];
  setTodo: Dispatch<SetStateAction<ITodo[]>>;
}

export interface INoTodo {
  text: string;
}
export interface Source {
  id: string;
  name: string;
}
export interface Article {
  source: Source;
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: Date;
  content: string;
}

export interface INews {
  status:string;
  totalResults:number;
  articles:Article[];
}
