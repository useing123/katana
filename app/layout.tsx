import './globals.css'
import { PostHogProvider } from './providers'
import { Inter } from 'next/font/google'
import { Metadata } from 'next'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Template',
  description: 'Template',
  keywords: 'keyword1, keyword2, keyword3',
  robots: 'index, follow',
  openGraph: {
    title: 'Template',
    description: 'Template',
    type: 'website',
    url: 'https://yourwebsite.com',
    siteName: 'Your Site Name',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Template',
    description: 'Template',
  },
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <PostHogProvider>
          {children}
        </PostHogProvider>
      </body>
    </html>
  )
}