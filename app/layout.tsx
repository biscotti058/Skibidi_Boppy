import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Σ SKIBIDI BOPPY Σ - The Most Viral SKIBIDI BOPPY Memecoin 🧠💀',
  description: 'SKIBIDI BOPPY $BOPPY - THE MOST VIRAL MEMECOIN 💪 100M+ VIEWS 🔥 SKIBIDI BOPPY ON THE WALL 🎵',
  keywords: 'SKIBIDI BOPPY, meme coin, crypto, brain rot, viral, TikTok, $BOPPY',
  authors: [{ name: 'Skibidi Boppy Team' }],
  openGraph: {
    title: 'Σ SKIBIDI BOPPY Σ - Most Viral Brain Rot Memecoin',
    description: 'THE MOST VIRAL MEMECOIN $BOPPY 🧠💀 100M+ VIEWS',
    type: 'website',
    images: [
      {
        url: '/images/skibidi-collage.jpeg',
        width: 1200,
        height: 630,
        alt: 'Skibidi Boppy Meme Coin'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Σ SKIBIDI BOPPY Σ - Most Viral Brain Rot Memecoin',
    description: 'THE MOST VIRAL MEMECOIN $BOPPY 💪',
    images: ['/images/skibidi-collage.jpeg']
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png'
  },
  robots: 'index, follow',
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>{children}</body>
    </html>
  )
}