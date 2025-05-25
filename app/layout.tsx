import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/ThemeProvider"
import { GoogleAnalytics } from '@next/third-parties/google'

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
    <html lang="en" suppressHydrationWarning>
         <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange={false}>
          {children}
        </ThemeProvider>
      </body>
      <GoogleAnalytics gaId="G-HN119R5SJ4" />
    </html>
  )
}
