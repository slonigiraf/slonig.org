import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Footer from "./Footer";
import Navbar from "./Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Change to your real domain:
const siteUrl = "https://slonig.org";
const siteName = "Slonig";
const defaultTitle = "Math Intervention Program for Students";
export const DEFAULT_PAGE_TITLE = `${defaultTitle} | ${siteName}`;
export const DEFAULT_PAGE_DESCRIPTION =
  "Discover Math Intervention Program For Students. Reach 70%+ Math Proficiency Schoolwide!";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  // SEO
  title: {
    default: DEFAULT_PAGE_TITLE,
    template: "%s | Slonig",
  },
  description: DEFAULT_PAGE_DESCRIPTION,

  alternates: {
    canonical: "/", // becomes https://slonig.org/
  },

  // Robots (allow indexing)
  robots: {
    index: true,
    follow: true,
    // Optional: match your example's preview settings
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  // Open Graph (Facebook/LinkedIn/iMessage, etc.)
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName,
    title: DEFAULT_PAGE_TITLE,
    description: DEFAULT_PAGE_DESCRIPTION,
    locale: "en_US",
    images: [
      {
        url: "https://slonig.org/socials.png",
        width: 1200,
        height: 628,
        alt: "Reach 70% + Math Proficiency Schoolwide with Slonig!",
      },
    ],
  },

  facebook: {
    appId: "916009531387575",
  },

  // Twitter/X
  twitter: {
    card: "summary_large_image",
    title: DEFAULT_PAGE_TITLE,
    description: DEFAULT_PAGE_DESCRIPTION,
    images: ["https://slonig.org/socials.png"],
    site: "@denslon_eng",
  },
  icons: {
    icon: [
      { url: "/icon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon-192x192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [
      { url: "/icon-180x180.png", sizes: "180x180", type: "image/png" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <meta name="msapplication-TileImage" content="/icon-270x270.png" />
        <link rel="preload" as="image" href="/named-logo.svg" />
        <link rel="preload" as="image" href="/work-in-pair.jpg" />
        <link rel="preload" as="image" href="/evidence.png" />
      </head>
      {/* Matomo Tracking */}
      <Script id="matomo" strategy="afterInteractive">
        {`
          var _paq = window._paq = window._paq || [];
          _paq.push(['trackPageView']);
          _paq.push(['enableLinkTracking']);
          (function() {
            var u="//matomo.slonig.org/";
            _paq.push(['setTrackerUrl', u+'matomo.php']);
            _paq.push(['setSiteId', '2']);
            var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
            g.async=true; g.src=u+'matomo.js'; s.parentNode.insertBefore(g,s);
          })();
        `}
      </Script>

      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}