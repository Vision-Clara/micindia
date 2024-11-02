import Layout from "@/components/layout/user/Layout";
import { Providers } from "./providers";

import { Metadata } from "next";
import { Montserrat } from "next/font/google";
import GlobalScripts from "@/components/common/GlobalScripts";

export const metadata: Metadata = {
  title: "MIC Organisation India",
  description:
    "MIC organisation vision is the economic development of poor and needy people in its operational area through quality education, training and capacity building. Eradicating poverty by providing a quality accesories and environment to our unprivileged ones for creating their strong foundation and bright future.",
};

export const globalFont = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={globalFont.variable}>
      <body>
        <GlobalScripts />
        <Providers>
          <Layout>{children}</Layout>
        </Providers>
      </body>
    </html>
  );
}
