import { Montserrat } from "next/font/google";
import "./ui/global.css";
import { font } from "./ui/fonts";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${font.className} antialiased`} >
      <body>
        {children}
      </body>
    </html>
  );
}
