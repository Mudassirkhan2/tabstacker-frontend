import './globals.css'
import type { Metadata } from 'next'
import NextAuthProvider from "./Providers.js"
import Footer from '@/components/Footor'

export const metadata: Metadata = {
  title: 'TabStacker — Stack your browser tabs',
  description: 'TabStacker helps you organise your Chrome tabs into folders, track your most-visited tabs, and set tab limits to stay focused.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <NextAuthProvider>
          {children}
          <Footer />
        </NextAuthProvider>
      </body>
    </html>
  )
}
