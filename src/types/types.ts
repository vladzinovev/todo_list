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

export type ITodo = {
  id: number;
  open: boolean;
  date: string;
  title: string;
  descr: string;
  selected: string;
  switched: boolean;
};
export type ITitle = {
  value: string;
  isEmpty: boolean;
  minLengthError: boolean;
  maxLengthError: boolean;
  inputValid: boolean;
  isDirty: boolean;
  onChange?: any;
  onBlur?: any;
};
export type IInput = {
  idLabel: string;
  type: string;
  title?: ITitle;
};
export type ISwitch = {
  active: boolean;
  setBoolean?: Dispatch<SetStateAction<boolean>>;
  todoNow: ITodo[] | undefined;
  setTodo?: Dispatch<SetStateAction<ITodo[]>>;
  keyId: number | undefined;
};
export type IItemTodo = {
  todo: ITodo;
  key: number;
  todoNow: ITodo[];
  setTodo: Dispatch<SetStateAction<ITodo[]>>;
};
export type INoTodo = {
  text: string;
};
export type Source = {
  id: string;
  name: string;
};
export type Article = {
  source: Source;
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: Date;
  content: string;
};
export type INews = {
  status: string;
  totalResults: number;
  articles: Article[];
};
