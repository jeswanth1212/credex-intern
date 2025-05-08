import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Providers from "@/components/providers"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { AuroraBackground } from "@/components/ui/aurora-background"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "SoftSell - Sell Your Unused Software Licenses",
  description:
    "SoftSell helps businesses monetize unused software licenses quickly and securely. Get the best value for your software assets.",
  keywords: "software resale, license resale, sell software licenses, software marketplace",
  generator: 'v0.dev',
  icons: {
    icon: [
      {
        url: '/favicon.svg',
        type: 'image/svg+xml',
      }
    ],
    shortcut: ['/favicon.svg'],
    apple: [
      {
        url: '/favicon.svg',
        type: 'image/svg+xml',
      }
    ],
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          <AuroraBackground>
            <div className="flex min-h-screen flex-col">
              <Navbar />
              <main className="flex-1">
                {children}
              </main>
              <Footer />
            </div>
          </AuroraBackground>
        </Providers>
      </body>
    </html>
  )
}
