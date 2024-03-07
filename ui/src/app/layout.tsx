import type { Metadata } from 'next';
import "@/styles/globals.css";
import { Inter as FontSans } from "next/font/google";
import { cn } from "@/lib/utils";
import MainHeader from "@/components/layout/MainHeader";
import { METADATA } from "@/constants";
import Footer from "@/components/layout/Footer";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const { title, description, image, canonical } = METADATA;
export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    images: [
      image
    ],
  },
  twitter: {
    title,
    description,
    images: [
      image
    ],
    card: "summary_large_image",
  },
  alternates: {
    canonical,
  },
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
        <div>
          {children}
        </div>

        <Footer />
      </body>
    </html>
  );
}
