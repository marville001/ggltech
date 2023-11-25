import type { Metadata } from 'next';
import { METADATA } from "@/constants";

const { title, description, image, canonical } = METADATA.about;
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
    <>
      {children}
    </>
  );
}
