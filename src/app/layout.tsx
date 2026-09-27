import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AnimaLens Privacy Policy",
  description:
    "Privacy Policy for AnimaLens, an animal observation and identification application.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
