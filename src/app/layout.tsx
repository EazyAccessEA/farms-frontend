import type { Metadata } from "next";
import "./globals.css";
import PuredgePrivacyControls from "@/components/PuredgePrivacyControls";

export const metadata: Metadata = {
  title: "Farm Companion - Silicon Valley S-Tier+ Local Farm Discovery",
  description: "Experience the future of food technology. Connect with local farms through our premium platform featuring fresh, sustainable produce directly from trusted farmers.",
  keywords: "local farms, fresh produce, sustainable agriculture, farm-to-table, premium food technology, Silicon Valley, S-tier experience",
  authors: [{ name: "Farm Companion Team" }],
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#0EA5E9", // Premium tech blue
  openGraph: {
    title: "Farm Companion - Premium Local Farm Discovery",
    description: "Experience the future of food technology with our Silicon Valley S-tier+ platform.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Farm Companion - Premium Local Farm Discovery",
    description: "Experience the future of food technology with our Silicon Valley S-tier+ platform.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* 🚀 SILICON VALLEY S-TIER+ PREMIUM FONTS */}
        {/* Inter Font - Premium tech typography */}
        <link 
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap" 
          rel="stylesheet" 
        />
        
        {/* Satoshi Font - Premium display typography */}
        <link 
          href="https://api.fontshare.com/v2/css?f[]=satoshi@100,200,300,400,500,600,700,800,900&display=swap" 
          rel="stylesheet" 
        />
        
        {/* JetBrains Mono - Premium monospace for code elements */}
        <link 
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@100;200;300;400;500;600;700;800&display=swap" 
          rel="stylesheet" 
        />
        
        {/* Preconnect to Google Fonts for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Preconnect to Fontshare for performance */}
        <link rel="preconnect" href="https://api.fontshare.com" />
        
        {/* 🎨 SILICON VALLEY S-TIER+ FAVICON */}
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        
        {/* 🚀 SILICON VALLEY S-TIER+ MANIFEST */}
        <link rel="manifest" href="/site.webmanifest" />
        
        {/* 🎯 SILICON VALLEY S-TIER+ META TAGS */}
        <meta name="application-name" content="Farm Companion" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Farm Companion" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <meta name="msapplication-TileColor" content="#0EA5E9" />
        <meta name="msapplication-tap-highlight" content="no" />
      </head>
      <body className="font-sans antialiased">
        {children}
        <PuredgePrivacyControls />
      </body>
    </html>
  );
}
