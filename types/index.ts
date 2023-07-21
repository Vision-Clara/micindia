import { ReactElement, ReactNode } from "react";
import { NextPage } from "next";
import { AppProps } from "next/app";

export type Event = {
  _id: string;
  eventName: string;
  eventDesc: string;
  eventPoster: string;
  eventDate: string;
  eventLocation: string;
};

export type User = {
  _id: string;
  name: string;
  email: string;
  branch: string;
  status: string;
  isActive: string;
  role: string;
};

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

export type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};
