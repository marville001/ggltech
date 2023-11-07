import type { Metadata } from 'next';
import "@/styles/globals.css";
import { Inter as FontSans } from "next/font/google";
import { cn } from "@/lib/utils";
import MainHeader from "@/components/layout/MainHeader";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: 'GGL Technologies',
  description: 'GGL Technologies',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen font-sans antialiased",
          fontSans.variable
        )}
      >
        <MainHeader />
        <div className="pt-[80px]">
          {children}
        </div>
      </body>
    </html>
  );
}
