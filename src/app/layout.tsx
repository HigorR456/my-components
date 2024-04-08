import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import StyledComponentsRegistry from './lib/registry'
import "../styles/globals.css";

const roboto = Roboto({
  weight: ['400', '700'],
  subsets: ["latin"],
  display: 'swap'
});

export const metadata: Metadata = {
  title: "My-Components",
  description: "Created by Higor",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
