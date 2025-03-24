import { Header } from "@/components/header";
import "./globals.css";
import FormContextProvider from "@/components/form_context";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        <Header></Header>
        <main>
          <FormContextProvider>
            {children}
          </FormContextProvider>
        </main>
      </body>
    </html>
  );
}
