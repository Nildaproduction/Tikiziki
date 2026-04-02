import type { Metadata, Viewport } from 'next'
import { Oswald, Archivo_Black } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const oswald = Oswald({
  subsets: ['latin'],
  variable: '--font-heading',
  weight: ['400','500','700']
})

const archivoBlack = Archivo_Black({
  subsets: ['latin'],
  variable: '--font-display'
})

export const metadata: Metadata = {
  title: 'Tiki ziki | Official website',
  description: 'Official website of Tiki ziki - Afropop and Afrobeat artist blending traditional African rhythms with contemporary sounds.',
  generator: 'v0.app',
  keywords: ['Afropop', 'Afrobeat', 'Music', 'Artist', 'African Music', 'Tiki ziki'],
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#141414',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="dark">
      <body className={`${oswald.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
