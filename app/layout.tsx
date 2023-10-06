import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import NextAuthProvider from "./Providers.js"
import Footor from '@/components/Footor'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'TabStacker',
  description: 'With TabStacker, you can effortlessly corral all your open tabs into a single, sleek page, decluttering your workspace',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextAuthProvider>
          <div >
            {children}
            <Footor />
          </div>
        </NextAuthProvider>
      </body>
    </html>
  )
}
