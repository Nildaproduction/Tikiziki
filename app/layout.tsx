import type { Metadata, Viewport } from 'next'
import { Merriweather } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import Script from 'next/script'
import './globals.css'

const merriweather = Merriweather({
  subsets: ['latin'],
  variable: '--font-serif',
})

export const metadata: Metadata = {
  title: 'Tiki ziki | Official website',
  description:
    'Official website of Tiki ziki - Afropop and Afrobeat artist blending traditional African rhythms with contemporary sounds.',
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${merriweather.variable} font-serif antialiased`}>
        {children}

        {/* Mailchimp Popup Script */}
        <Script
          id="mcjs"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(c,h,i,m,p){
                m=c.createElement(h),
                p=c.getElementsByTagName(h)[0],
                m.async=1,
                m.src=i,
                p.parentNode.insertBefore(m,p)
              }(document,"script","https://chimpstatic.com/mcjs-connected/js/users/b489bf014d7697b5376d14cf5/75c4b5fdc758d918fe34bfdc5.js");
            `,
          }}
        />

        <Analytics />
      </body>
    </html>
  )
}
