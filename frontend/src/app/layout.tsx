import { Header } from "@/components/header";
import "./globals.css";
import FormContextProvider from "@/components/form_context";
import { Toaster } from "sonner";

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
            <Toaster richColors />
          </FormContextProvider>
        </main>
      </body>
    </html>
  );
}
