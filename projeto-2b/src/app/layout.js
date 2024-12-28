
import "./globals.css";
import Header from "@/components/Header";
import { SessionProvider } from "next-auth/react";
import Footer from "@/components/Footer";



export const metadata = {
  title: "Titulo do site e tals",
  description: "Desdrição do site e tals",
  charset: 'UTF-8',
  author: 'José Sbaraini',
  keywords: 'Coisas e coisa e co'


};

export default function RootLayout({ children }) {
  return (
    <Footer>
      <html lang="en">
        <body>
        
          {/* <Header /> */}
          {children}
        
        </body>
      </html>
    </Footer>
  );
}
