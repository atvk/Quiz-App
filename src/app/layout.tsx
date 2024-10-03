import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header"

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "QUIZ APP",
  description: "Generated by Steblovskiy Anton",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white`}>
        <div className="flex flex-col h-screen max-h-screen bg-white text-gray-900">
          <Header />
          <div className="flex-grow overflow-y-auto">
            {children}
            </div>

        </div>
      </body>
    </html>
  );
}
