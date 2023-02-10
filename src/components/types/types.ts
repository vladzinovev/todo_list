
export interface IInput {
  idLabel: string;
  type:string;
  title?: {
    value: any;
    isEmpty: boolean;
    minLengthError: boolean;
    maxLengthError: boolean;
    inputValid: boolean;
    isDirty: boolean;
    onChange?: any;
    onBlur?: any;
  }|undefined;
}
