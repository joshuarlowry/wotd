import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Word of the Day',
  description: 'Minimal Next.js app ready for Vercel',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
