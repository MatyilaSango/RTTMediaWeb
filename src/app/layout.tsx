import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/Components/Header/Header'
import Footer from '@/Components/Footer/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'RTTMedia',
  description: 'Provides services for Reddit, Tumblr, and Twitter media downloader.',
  icons: {
    icon: [
      {
        media: '(prefers-color-scheme: light)',
        url: '/RTTMedia.ico',
        href: '/RTTMedia.ico',
      },
    ],
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
