import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Royal Sabah Turf Club - Home of Bornean Racing",
  description:
    "Official website of the Royal Sabah Turf Club. Horse racing, breeding, and the Sport of Kings since 1908 in the Land Below the Wind.",
  keywords: [
    "RSTC",
    "Royal Sabah Turf Club",
    "horse racing",
    "Sabah",
    "Malaysia",
    "Tambalang Racecourse",
    "Tuaran",
    "Borneo racing",
    "thoroughbred",
  ],
  authors: [{ name: "Royal Sabah Turf Club" }],
  icons: {
    icon: "/logo.svg",
  },
  openGraph: {
    title: "Royal Sabah Turf Club - Home of Bornean Racing",
    description:
      "Official website of the Royal Sabah Turf Club. The Sport of Kings since 1908.",
    url: "https://www.royalsabahturfclub.com.my",
    siteName: "Royal Sabah Turf Club",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Royal Sabah Turf Club - Home of Bornean Racing",
    description:
      "Official website of the Royal Sabah Turf Club. The Sport of Kings since 1908.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
