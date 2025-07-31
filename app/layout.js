import { Geist, Geist_Mono, Roboto } from "next/font/google";
import "./globals.css";
import Topheader from "./web/components/Topheader";

import Provider from "./Provider";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-roboto",
});
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "WicketMart",
  description: "Your ultimate cricket store",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${roboto.variable} antialiased`}
      >
        <Topheader />
       
        <Provider>
        {children}
        </Provider>

      </body>
    </html>
  );
}
