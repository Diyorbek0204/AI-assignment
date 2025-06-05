import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Diyorbek App',
  description: 'Created with Diyorbek',
  generator: 'Diyorbek.dev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
