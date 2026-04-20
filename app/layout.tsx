import type { Metadata } from 'next'
import { Inter, Montserrat } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({
  subsets: ["latin"],
  variable: '--font-sans',
})

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: '--font-heading',
})

export const metadata: Metadata = {
  title: 'MAK Contracting - Construction & Manpower Solutions',
  description: 'Delivering large-scale construction, manpower, and infrastructure support services across Saudi Arabia with unmatched reliability and execution.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/mak-construction.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/mak-construction.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/mak-construction.png',
        type: 'image/svg+xml',
      },
    ],
    apple: '/mak-construction.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${montserrat.variable} font-sans antialiased bg-slate-50 text-slate-900`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
