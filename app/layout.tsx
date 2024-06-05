import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./_components/Navbar";
import Footer from "./_components/Footer";
import NoInternetConnection from "./_components/NoInternetConnection ";
import { useEffect } from "react";
import DarkModeChecker from "./_components/DarkModeChecker";
import { SessionProvider } from "next-auth/react";
import { auth } from "@/auth";

const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session: any = auth();

  return (
    <SessionProvider session={session}>
      <html lang="en">
        <body className="">
          <main className="text-[#0e0e0e] bg-[#fff] dark:bg-[#0e0e0e] dark:text-white ">
            <Navbar />
            <DarkModeChecker />
            {/** check the dark mode status */}
            <main className="min-h-[calc(100vh-14rem-2px)]">{children}</main>
            <Footer />
          </main>
        </body>
      </html>
    </SessionProvider>
  );
}
