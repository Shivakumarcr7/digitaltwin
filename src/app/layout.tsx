import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import FloatingChatbot from "@/components/FloatingChatbot";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tachyon AI/ML Digital Twin Ecosystem",
  description: "P.E.S. College of Engineering, Mandya",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black text-white antialiased`}>
        {children}
        <FloatingChatbot />
      </body>
    </html>
  );
}
