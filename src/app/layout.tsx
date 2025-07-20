import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "../components/common/header";
import FullGridBackground from "@/components/common/bg";
import Footer from "@/components/common/footer";
import { Toaster } from "@/components/ui/sonner";
import { AuthProvider } from "../../AuthContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NewWay - AI Roadmaps for Students",
  description: "Personalized AI Roadmaps for Students",
  icons: {
    icon: "/favicon.png",
  },
  openGraph: {
    images: [
      {
        url: "/logo.png",
      }
    ]
  }
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
        <AuthProvider>
          <Toaster />
          <div className="relative min-h-screen">
            <FullGridBackground />
            <Header />
            {children}
            <Footer />
          </div>
        </AuthProvider>
      </body>
    </html>
  );
}
