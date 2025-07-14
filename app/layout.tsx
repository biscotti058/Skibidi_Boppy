import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: '💫 SKIBIDI BOPPY 💫 - GET BOPPY OR GET REKT! 🚀💎',
  description: 'SKIBIDI BOPPY $BOPPY - GET BOPPY OR GET REKT! 🔥 THE ULTIMATE BRAIN ROT MEMECOIN 💪 100M+ VIEWS 🎵 BOPPY TO THE MOON! 🚀',
  keywords: 'SKIBIDI BOPPY, get boppy or get rekt, meme coin, crypto, brain rot, viral, TikTok, $BOPPY, memecoin, skibidi, boppy',
  authors: [{ name: 'Skibidi Boppy Team' }],
  openGraph: {
    title: '💫 SKIBIDI BOPPY 💫 - GET BOPPY OR GET REKT!',
    description: 'THE ULTIMATE BRAIN ROT MEMECOIN $BOPPY 🔥 GET BOPPY OR GET REKT! 💎🚀',
    type: 'website',
    images: [
      {
        url: '/images/skibidi-collage.jpeg',
        width: 1200,
        height: 630,
        alt: 'Skibidi Boppy - Get Boppy or Get Rekt!'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: '💫 SKIBIDI BOPPY 💫 - GET BOPPY OR GET REKT!',
    description: 'THE ULTIMATE BRAIN ROT MEMECOIN $BOPPY 🔥💎',
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