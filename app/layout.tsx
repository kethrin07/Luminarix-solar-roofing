import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Solar Panel Installation | Solar Panel Company | AMECO Solar",
  description: "Explore AMECO Solar, which is on the list of the top solar panel companies in the US, find answers to your questions, and hurry up to go solar.",
  openGraph: {
    title: "Solar Panel Installation | Solar Panel Company | AMECO Solar",
    description: "Explore AMECO Solar, which is on the list of the top solar panel companies in the US, find answers to your questions, and hurry up to go solar.",
    images: ["https://i.ibb.co/BN5FYKK/Asset-132-3x.png"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Solar Panel Installation | Solar Panel Company | AMECO Solar",
    description: "Explore AMECO Solar, which is on the list of the top solar panel companies in the US, find answers to your questions, and hurry up to go solar.",
    images: ["https://i.ibb.co/BN5FYKK/Asset-132-3x.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="https://cdn.prod.website-files.com/625dd4efec9d3db4cc3e6da9/627165f5cd483a14884a33d3_Asset%2085.png" />
        <link rel="apple-touch-icon" href="https://cdn.prod.website-files.com/625dd4efec9d3db4cc3e6da9/627165fe4c24e1802728e9c2_Asset%2085.png" />
        <script src="https://use.typekit.net/vck5mwe.js" />
        <script dangerouslySetInnerHTML={{ __html: "try{Typekit.load();}catch(e){}" }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
