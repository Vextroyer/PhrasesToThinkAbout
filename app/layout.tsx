import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Frases para pensar",
  description: "Inspirate a pensar y a escribir viendo frases celebres.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="w-full h-screen bg-slate-950 text-white">{children}</body>
    </html>
  );
}
