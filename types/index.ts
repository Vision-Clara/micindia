import { ChangeEvent, FormEvent, ReactElement, ReactNode } from "react";
import { NextPage } from "next";
import { AppProps } from "next/app";

// Data types
export interface IEvent {
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
  isActive: boolean;
  role: string;
}

// API Types
export interface IResponseUser {
  success: boolean;
  message: string;
  user: IUser;
}

export interface IResponseUserMany {
  success: boolean;
  message: string;
  users: IUser[];
}

export interface IUserPayload {
  name?: string;
  email?: string;
  branch?: string;
  status?: string;
  isActive?: boolean;
  role?: string;
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

//form data types
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

export interface IContactFormData {
  name: string;
  email: string;
  message: string;
}

export interface IFeedbackFormData {
  name: string;
  type: string;
  message: string;
}

export interface ICreateUserFormData {
  name: string;
  email: string;
}

export interface IUpdateUserFormData {
  name: string;
  email: string;
  branch: string;
  status: string;
  isActive: string;
  role: string;
}

export interface ICertificateData {
  name: string;
  position: string;
  location: string;
  fromDate: string;
  toDate?: string;
  months?: string;
}
