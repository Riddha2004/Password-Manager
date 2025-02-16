import { Roboto } from "next/font/google";
import { Toaster } from "react-hot-toast";
import "./globals.css";

const roboto = Roboto({ subsets: ["latin"], weight: ['400','500','700']});

export const metadata = {
  title: "Password Manager",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth bg-green-100">
      <body className={roboto.className}>
        <main>
          <Toaster/>
          {children}
        </main>
      </body>
    </html>
  );
}
