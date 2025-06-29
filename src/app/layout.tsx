import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { ButtonContact } from "@/components/shared/buttonContact";

const jakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta-sans",
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Station Adventure Puncak - Wisata Edukatif dan Seru di Puncak",
  description:
    "Station Adventure Puncak menawarkan pengalaman wisata edukatif dan petualangan untuk keluarga, sekolah, dan perusahaan. Nikmati berbagai aktivitas seru di alam terbuka!",
  keywords: [
    "Station Adventure",
    "wisata Puncak",
    "outbound Puncak",
    "wisata edukatif",
    "liburan keluarga",
    "team building",
    "Puncak Bogor"
  ],
  authors: [{ name: "Station Adventure", url: "https://stationadventure.com" }],
  creator: "Station Adventure Team",
  publisher: "Station Adventure",
  robots: "index, follow",
  openGraph: {
    title: "Station Adventure Puncak",
    description:
      "Nikmati pengalaman wisata edukatif dan seru di alam terbuka bersama keluarga dan tim di Station Adventure Puncak.",
    url: "https://stationadventure.com",
    siteName: "Station Adventure",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Station Adventure Puncak",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Station Adventure Puncak",
    description:
      "Pengalaman wisata edukatif dan seru untuk semua kalangan di Puncak.",
    images: ["/og-image.jpg"],
    creator: "@stationadventure",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body
        className={`${jakartaSans.variable} antialiased`}
        suppressHydrationWarning
      >
        <Header />
        <main className="bg-background space-y-24">{children}</main>
        <Footer />
        <ButtonContact />
      </body>
    </html>
  );
}
