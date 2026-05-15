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
  keywords: ['Afropop', 'Afrobeat', 'Music', 'Artist', 'African Music', 'Tiki ziki'],
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

        {/* Mailchimp backup script (optional, NOT popup UI) */}
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
              }(document,"script","https://chimpstatic.com/mcjs-connected/js/users/b489bf014d7697b5376d14cf5/29f249d8d22d42837ab22060b.js");
            `,
          }}
        />

        <Analytics />
      </body>
    </html>
  )
}
