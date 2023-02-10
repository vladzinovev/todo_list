import { Dispatch, SetStateAction } from "react";

export interface ITodo{
  date:string;
  title:string;
  descr:string;
  selected:string;
}

export interface ITitle{
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
  type:string;
  title?: ITitle|undefined;
}
