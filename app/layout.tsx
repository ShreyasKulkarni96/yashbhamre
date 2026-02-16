import type { Metadata } from "next";
import "./globals.css";
import KineticGrid from "@/src/KineticGrid";

export const metadata: Metadata = {
  title: "Yash Bhamre",
  description: "Yash Bhamre portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="font-sans text-gray-800"
      >
        <KineticGrid/>
        {children}
      </body>
    </html>
  );
}
