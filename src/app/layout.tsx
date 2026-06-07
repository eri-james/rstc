import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: "RSTC — Home of Bornean Racing",
  description:
    "Fan community hub for the Royal Sabah Turf Club. Race info, horse tracking, and the Sport of Kings since 1908 in the Land Below the Wind.",
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
    "Umamusume",
    "Kaamatan Cup",
  ],
  authors: [{ name: "RSTC Fan Community" }],
  icons: {
    icon: "/rstc-logo.png",
  },
  openGraph: {
    title: "RSTC — Home of Bornean Racing",
    description:
      "Fan community hub for the Royal Sabah Turf Club. The Sport of Kings since 1908.",
    siteName: "RSTC",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased bg-background text-foreground font-sans">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
