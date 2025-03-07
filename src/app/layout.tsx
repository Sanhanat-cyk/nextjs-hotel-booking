import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Nav from "../app/component/navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html >
      <body className="flex flex-col min-h-screen"> {/* เพิ่ม min-h-screen และ flex-col */}
        <div className="flex flex-col flex-grow"> {/* เพิ่ม flex-grow */}
          <header className="col-span-2 border border-b-gray-200">
            <Nav />
          </header>

          <div className="flex flex-col flex-grow"> {/* เพิ่ม flex-grow */}
            {children}
          </div>
        </div>
        <footer className="flex flex-row justify-between bg-gray-200 p-4"> {/* เพิ่ม p-4 เพื่อ padding */}
          <div>
          <p className='font-semibold'>Tripter</p>
            <p>Your favorite hotel booking experience</p>
            <p>since 1998!</p>
          </div>

          <div>
            <p>Help</p>
            <p>FAQ</p>
            <p>Customer service</p>
            <p>How to guide</p>
            <p>Contact us</p>
          </div>
        </footer>
      </body>
    </html>
  );
}