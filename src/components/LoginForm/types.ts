import { ChangeEvent, SyntheticEvent } from 'react';

export interface Data {
  username: string;
  password: string;
}

type GenericChangeHandler = (e: ChangeEvent<HTMLInputElement>) => void;

export interface Handlers {
  changeUsername: GenericChangeHandler;
  changePassword: GenericChangeHandler;
  submit: (e: SyntheticEvent<HTMLFormElement>) => void;
}
