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
        url: '/android-chrome-512x512.png',
        width: 512,
        height: 512,
        alt: 'Skibidi Boppy - Get Boppy or Get Rekt!'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: '💫 SKIBIDI BOPPY 💫 - GET BOPPY OR GET REKT!',
    description: 'THE ULTIMATE BRAIN ROT MEMECOIN $BOPPY 🔥💎',
    images: ['/android-chrome-512x512.png']
  },
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.ico', sizes: 'any' }
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }
    ],
    other: [
      { url: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' }
    ]
  },
  manifest: '/site.webmanifest',
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
        
        {/* Favicon links aggiuntivi per massima compatibilità */}
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        
        {/* Meta tags per PWA */}
        <meta name="theme-color" content="#7c3aed" />
        <meta name="background-color" content="#1f2937" />
        <meta name="display" content="standalone" />
      </head>
      <body>{children}</body>
    </html>
  )
}