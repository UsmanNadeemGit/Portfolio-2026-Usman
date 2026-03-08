import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import { NavbarDemo } from "@/components/ui/navbar-demo";
import { FloatingDock } from "@/components/ui/floating-dock";
// import { GridBackground } from "@/components/ui/grid-background";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandWhatsapp,
  IconMail,
  IconBrandInstagram,
} from "@tabler/icons-react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Usman Nadeem | Full Stack Developer",
  description:
    "Building modern web applications with React, Node.js, and more.",
  keywords: [
    "Usman Nadeem",
    "portfolio",
    "developer",
    "full stack",
    "react",
    "typescript",
    "javascript",
    "python",
  ],
  authors: [{ name: "Usman Nadeem", url: "https://yourwebsite.com" }],
  openGraph: {
    title: "Usman Nadeem | Full Stack Developer",
    description:
      "Building modern web applications with React, Node.js, and more.",
    url: "https://yourwebsite.com",
    siteName: "Usman Nadeem Portfolio",
    images: [
      {
        url: "https://yourwebsite.com/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Usman Nadeem | Full Stack Developer",
    description:
      "Building modern web applications with React, Node.js, and more.",
    creator: "@yourtwitter",
    images: ["https://yourwebsite.com/twitter-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Updated socialItems to match the user's latest info. Instagram removed, all links updated.
  const socialItems = [
    {
      title: "GitHub",
      icon: <IconBrandGithub className="h-full w-full" />,
      href: "https://github.com/UsmanNadeemGit",
    },
    {
      title: "LinkedIn",
      icon: <IconBrandLinkedin className="h-full w-full" />,
      href: "https://www.linkedin.com/in/usman-nadeem-88a388322/",
    },
    {
      title: "WhatsApp",
      icon: <IconBrandWhatsapp className="h-full w-full" />,
      href: "https://wa.me/923476575824", // WhatsApp link for the new phone number
    },
    {
      title: "Email",
      icon: <IconMail className="h-full w-full" />,
      href: "mailto:usman.nadeem2985@gmail.com",
    },
    // Instagram removed as per user request
  ];

  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning={true}>
      <head>
        {/* Google Analytics (gtag.js) - Using Next.js Script */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-7ERWVLWFKQ"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-7ERWVLWFKQ');
        `}
        </Script>
        <meta name="theme-color" content="#ffffff" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased text-white selection:bg-pink-500 selection:text-white`}
      >
        <NavbarDemo />
        {children}

        {/* Floating Dock */}
        <div id="contact" className="fixed bottom-4 left-0 right-0 z-50 flex justify-center px-4">
          <FloatingDock
            items={socialItems}
            desktopClassName="max-w-2xl w-full justify-center backdrop-blur-sm bg-white/80 dark:bg-neutral-900/80 border border-neutral-200 dark:border-neutral-800"
            mobileClassName="w-full max-w-xs mx-auto"
          />
        </div>

        {/* Theme Initialization Script */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
            (function() {
              const storedTheme = localStorage.getItem('theme');
              const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
              const initialTheme = storedTheme || systemTheme;
              if (initialTheme === 'dark') {
                document.documentElement.classList.add('dark');
              }
            })();
          `,
          }}
        />
      </body>
    </html>
  );
}
