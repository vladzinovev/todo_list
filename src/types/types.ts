import { Dispatch, SetStateAction } from "react";

export interface ITodo {
  id: number;
  open:boolean;
  date: string;
  title: string;
  descr: string;
  selected: string;
  switched: boolean;
}

export interface ITitle {
  value: any;
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
  title?: ITitle | undefined;
}
export interface ISwitch {
  active: boolean;
  setBoolean: Dispatch<SetStateAction<boolean>> | undefined;
  todoNow: ITodo[] | undefined;
  setTodo: Dispatch<SetStateAction<ITodo[]>> | undefined;
  keyId: number | undefined;
}

export interface IItemTodo {
  todo: ITodo;
  key: number;
  todoNow: ITodo[];
  setTodo: Dispatch<SetStateAction<ITodo[]>>;
}

export interface IUiOpen {
  td:ITodo;
  todoDay:ITodo[];
  setTodoDay: Dispatch<SetStateAction<ITodo[]>>;
}
export interface IDays {
  todoDay: ITodo[];
  setTodoDay: Dispatch<SetStateAction<ITodo[]>>;
}

export interface IItem {
  key: number;
  td: ITodo;
  todoDay: ITodo[];
  setTodoDay: Dispatch<SetStateAction<ITodo[]>>;
}
export interface INoTodo {
  text: string;
}
