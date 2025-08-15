import type React from "react"
import type { Metadata } from "next"
import { Inter, Poppins } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Maharagama Toastmasters Club - Building Leaders & Communicators",
  description:
    "Join Maharagama Toastmasters Club where leaders and communicators grow. Develop your public speaking and leadership skills in a supportive environment.",
  keywords: "toastmasters, public speaking, leadership, communication skills, maharagama, sri lanka",
  authors: [{ name: "Maharagama Toastmasters Club" }],
  openGraph: {
    title: "Maharagama Toastmasters Club",
    description: "Where leaders and communicators grow—one meeting at a time.",
    type: "website",
    locale: "en_US",
    siteName: "Maharagama Toastmasters Club",
  },
  twitter: {
    card: "summary_large_image",
    title: "Maharagama Toastmasters Club",
    description: "Where leaders and communicators grow—one meeting at a time.",
  },
  robots: {
    index: true,
    follow: true,
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${poppins.variable} font-sans antialiased`}>{children}</body>
    </html>
  )
}
