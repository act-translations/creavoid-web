import type { Metadata } from "next";
import { Roboto_Slab, Inter } from "next/font/google";
import "./globals.css";

const robotoSlab = Roboto_Slab({
  variable: "--font-roboto-slab",
  subsets: ["latin"],
  display: 'swap',
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Creavoid - Transform Your Business",
  description: "Web Development, AI Automation, and Paid Advertising Services",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${robotoSlab.variable} ${inter.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
