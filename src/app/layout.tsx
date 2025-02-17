import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { GraphQLProvider } from "@/providers";
import Layout from "@/components/layout";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Country List Visualization",
  description: "Country List Visualization App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <GraphQLProvider>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased scroll-smooth `}
        >
          <Layout>

            {children}
          </Layout>
      </body>
      </GraphQLProvider>
    </html>
  );
}
