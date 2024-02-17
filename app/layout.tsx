import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/header";
import ActiveSectionContextProvider from "@/context/active-section";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "nikhil.me",
  description: "Personal Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <body className={`${inter.className} bg-gray-100 text-gray-900 relative`}>
        <div className="body-bg-layer-1"></div>  
        <div className="body-bg-layer-2"></div>  

        <ActiveSectionContextProvider >
        <Header></Header>

        {children}
        </ActiveSectionContextProvider>
      </body>
    </html>
  );
}
