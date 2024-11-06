import localFont from "next/font/local";
import "./globals.css";



export const metadata = {
  title: "Titulo do site e tals",
  description: "Desdrição do site e tals",
  charset: 'UTF-8',
  author: 'José Sbaraini',
  keywords: 'Coisas e coisa e co'


};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
