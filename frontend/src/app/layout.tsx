import { Header } from "@/components/header";
import "./globals.css";
import { ReactNode } from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        <Header></Header>
        {children}
      </body>
    </html>
  );
}
