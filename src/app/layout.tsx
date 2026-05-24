import type { Metadata } from "next";
import { Playfair_Display, Inter, Dancing_Script } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const dancing = Dancing_Script({
  subsets: ["latin"],
  variable: "--font-dancing",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Written in the Stars",
  description: "A celebration of beauty, grace, and distinction. Today, the universe honors Edrine Desire.",
  icons: {
    icon: "/star-icon.svg",
  },
  openGraph: {
    title: "Written in the Stars",
    description: "A celebration of beauty, grace, and distinction. Today, the universe honors Edrine Desire.",
    images: [
      {
        url: "/images/1.jpg",
        width: 800,
        height: 1200,
        alt: "Edrine Desire - Written in the Stars",
      },
    ],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} ${dancing.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-midnight-dark text-pearl font-sans selection:bg-rose-gold selection:text-midnight-dark">
        {children}
      </body>
    </html>
  );
}
