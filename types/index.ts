import { ChangeEvent, FormEvent, ReactElement, ReactNode } from "react";
import { NextPage } from "next";
import { AppProps } from "next/app";

// Data types
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

// API Res/Req Types
export interface IResponseUser {
  success: boolean;
  message: string;
  user: IUser;
}

// Layout Types
export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

export type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

// Form Types
export interface IFormState<T> {
  values: T;
  errors: T;
}

export interface ISignUpFormData {
  email: string;
  password: string;
}

export interface IForgetPassFormData {
  email: string;
}

export interface IResetPassFormData {
  password: string;
  confirmPassword: string;
}

export type TChangeEvent = ChangeEvent<
  HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
>;

export type TFormEvent = FormEvent<HTMLFormElement>;

// Validation Types
export type TValidator<T> = (formValues: T) => IValidateResult;

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
