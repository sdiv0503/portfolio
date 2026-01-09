import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/shared/theme-provider";
import { Navbar } from "@/components/shared/navbar";
import { Footer } from "@/components/shared/footer";
import { SmoothScrollProvider } from "@/components/providers/smooth-scroll";
import { SkipNav } from "@/components/shared/skip-nav";
import { ScrollToAnchor } from "@/components/shared/scroll-to-anchor";

const inter = Inter({
  subsets: ["latin"],
  display: "swap", // Ensures text is visible immediately even if font is loading
  variable: "--font-sans",
});
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL
  ? `https://${process.env.NEXT_PUBLIC_BASE_URL}`
  : "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Divyansh Sharma | Full Stack Developer",
    template: "%s | Divyansh Sharma",
  },
  description:
    "Portfolio of Divyansh Sharma, a Full Stack Developer specializing in Next.js, React, and Modern Web Technologies.",
  keywords: [
    "Next.js",
    "React",
    "TypeScript",
    "Full Stack Developer",
    "Portfolio",
    "Divyansh Sharma",
    "VIT Vellore",
  ],

  // UPDATED: Added GitHub URL to author info
  authors: [{ name: "Divyansh Sharma", url: "https://github.com/sdiv0503" }],

  creator: "Divyansh Sharma",

  openGraph: {
    type: "website",
    locale: "en_US",
    url: baseUrl,
    title: "Divyansh Sharma | Full Stack Developer",
    description: "Building accessible, pixel-perfect, secure web applications.",
    siteName: "Divyansh Sharma Portfolio",
    images: [
      {
        url: "/opengraph-image", // Uses the dynamic image we created
        width: 1200,
        height: 630,
        alt: "Divyansh Sharma Portfolio",
      },
    ],
  },

  // KEEP THIS: Discord & Slack use these tags for large preview images
  twitter: {
    card: "summary_large_image",
    title: "Divyansh Sharma | Full Stack Developer",
    description: "Building accessible, pixel-perfect, secure web applications.",
    images: ["/opengraph-image"],
    // Removed 'creator' field since you don't use Twitter
  },

  icons: {
    icon: "/favicon.ico",
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
        className={cn(
          "bg-background min-h-screen overflow-x-hidden font-sans antialiased",
          inter.variable
        )}
      >
        <SkipNav />
        <div className="bg-noise" />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SmoothScrollProvider>
            <ScrollToAnchor />
            <div className="flex min-h-screen flex-col">
              <Navbar />
              <main id="main-content" className="flex-1" tabIndex={-1}>
                {children}
              </main>
              <Footer />
            </div>
          </SmoothScrollProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
