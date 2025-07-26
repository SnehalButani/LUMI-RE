import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'LUMIÈRE EAU DE PARFUM',
  description: 'LUMIÈRE EAU DE PARFUM',
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
