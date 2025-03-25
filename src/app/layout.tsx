import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "../app/styles/index.css";
import Layout from "./components/layout";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Blog Học Tập Và Công Nghệ – Kiến Thức, Kinh Nghiệm, Xu Hướng Mới",
  description:
    "Explore expert insights, tips, and trends on the Learn JavaScript Blog. Stay updated with our latest articles, tutorials, and guides to enhance your JavaScript skills. Read more now!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* {children} */}
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
