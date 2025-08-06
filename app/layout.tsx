import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import './globals.css'
import Header from '@/components/sections/header'

export const metadata: Metadata = {
  title: 'Ektr - Promoting Women Empowerment & Social Justice',
  description: 'Ektr -A modern, interactive website dedicated to promoting gender equality, women\'s empowerment, and social justice. Built with Next.js 15, TypeScript, and AI-powered features.',
  keywords: 'gender equality, women empowerment, social justice, feminism, equality, human rights',
  authors: [{ name: 'rajopensource01' }],
  creator: 'rajopensource01',
  generator: 'Next.js 15',
  openGraph: {
    title: 'Ektr-Promoting Women Empowerment & Social Justice',
    description: 'Ektr-Promoting gender equality, women empowerment, and social justice',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ektr - Promoting Women Empowerment & Social Justice',
    description: 'Promoting gender equality, women empowerment, and social justice',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>
      </head>
      <body>
        <Header />
        <main className="pt-16">
          {children}
        </main>
      </body>
    </html>
  )
}
