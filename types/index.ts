import { ChangeEvent, FormEvent, ReactElement, ReactNode } from "react";
import { NextPage } from "next";
import { AppProps } from "next/app";

export interface Event {
  _id: string;
  eventName: string;
  eventDesc: string;
  eventPoster: string;
  eventDate: string;
  eventLocation: string;
}

export interface IUser {
  _id: string;
  name: string;
  email: string;
  branch: string;
  status: string;
  isActive: string;
  role: string;
}

export interface IResponseUser {
  success: boolean;
  message: string;
  user: IUser;
}

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

export type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export interface IFormState<T> {
  values: T;
  errors: T;
}

export interface ISignUpFormData {
  email: string;
  password: string;
}

export type TChangeEvent = ChangeEvent<
  HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
>;

export type TFormEvent = FormEvent<HTMLFormElement>;

export interface IUseFormProps<T> {
  initialFormData: IFormState<T>;
  validator: TValidator<T>;
}

export type TUseFormReturn<T> = [
  IFormState<T>,
  boolean,
  (event: TChangeEvent) => void,
  (f: () => any) => (event: TFormEvent) => Promise<void>
];

export interface IValidateResult {
  success: boolean;
  field: string;
  message: string;
}

export type TValidator<T> = (formValues: T) => IValidateResult;
