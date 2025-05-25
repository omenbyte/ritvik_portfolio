import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/ThemeProvider"
import Script from "next/script"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Ritvik Sharma",
  description: "Cybersecurity specialist and a full-stack web developer with a strong hands-on experience in secure system design, cloud infrastructure, cybersecurity and software development.",
  keywords: [
    "Ritvik Sharma",
    "web developer",
    "full-stack developer",
    "portfolio",
    "Next.js developer",
    "frontend engineer",
    "cloud engineer",
    "penetration testing",
    "freelance web developer"
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <head>
        {/*Default: Dark Mode*/}
        <Script id="set-dark-mode" strategy="beforeInteractive">
          {`
            document.documentElement.classList.add('dark');
          `}
        </Script>
        {/* Google Analytics */}
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=G-9DSTW7FHDZ`}
        />
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-9DSTW7FHDZ');
            `,
          }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} disableTransitionOnChange={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
