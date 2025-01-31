import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";


export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
      <Header />
        {children}
      </body>
    </html>
  );
}
