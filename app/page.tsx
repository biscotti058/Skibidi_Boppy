"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"

// Componente per effetti emoji che volano
const FlyingEmoji = ({ emoji, x, y, onComplete }: { emoji: string; x: number; y: number; onComplete: () => void }) => {
  useEffect(() => {
    const timer = setTimeout(onComplete, 2000)
    return () => clearTimeout(timer)
  }, [onComplete])

  return (
    <div 
      className="fixed pointer-events-none z-50 text-2xl animate-bounce opacity-100"
      style={{ 
        left: x, 
        top: y,
        animation: 'flyUp 2s ease-out forwards'
      }}
    >
      {emoji}
    </div>
  )
}

export default function SkibidiBoppy() {
  const [viewCount, setViewCount] = useState(100000000)
  const [isAnimating, setIsAnimating] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [reducedMotion, setReducedMotion] = useState(false)
  const [flyingEmojis, setFlyingEmojis] = useState<Array<{id: number, emoji: string, x: number, y: number}>>([])
  const [emojiCounter, setEmojiCounter] = useState(0)

  const randomEmojis = ['🔥', '💎', '🚀', '💪', '⚡', '🎵', '💫', '🎯', '💀', '🧠', '🎭', '🎪', '🎨', '🎮', '⭐', '💥', '🌟', '✨', '🎉', '💰']

  useEffect(() => {
    // Detect mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    // Check for reduced motion preference
    const checkReducedMotion = () => {
      setReducedMotion(window.matchMedia('(prefers-reduced-motion: reduce)').matches)
    }
    
    checkMobile()
    checkReducedMotion()
    
    window.addEventListener('resize', checkMobile)
    
    const interval = setInterval(() => {
      setViewCount((prev) => prev + Math.floor(Math.random() * 1000))
    }, 2000)
    
    return () => {
      clearInterval(interval)
      window.removeEventListener('resize', checkMobile)
    }
  }, [])

  const createFlyingEmoji = (event: React.MouseEvent) => {
    const rect = event.currentTarget.getBoundingClientRect()
    const x = event.clientX - rect.left + rect.left
    const y = event.clientY - rect.top + rect.top
    const randomEmoji = randomEmojis[Math.floor(Math.random() * randomEmojis.length)]
    
    const newEmoji = {
      id: emojiCounter,
      emoji: randomEmoji,
      x: x - 10,
      y: y - 10
    }
    
    setFlyingEmojis(prev => [...prev, newEmoji])
    setEmojiCounter(prev => prev + 1)
  }

  const removeFlyingEmoji = (id: number) => {
    setFlyingEmojis(prev => prev.filter(emoji => emoji.id !== id))
  }

  const handleBecomeBoppy = (event: React.MouseEvent) => {
    setIsAnimating(true)
    createFlyingEmoji(event)
    setTimeout(() => setIsAnimating(false), 1000)
  }

  const handleActionClick = (event: React.MouseEvent) => {
    createFlyingEmoji(event)
  }

  // Più animazioni anche su mobile per renderlo più caotico
  const getAnimationClass = (desktopAnim: string, mobileAnim: string = "animate-bounce") => {
    if (reducedMotion) return ""
    return isMobile ? mobileAnim : desktopAnim
  }

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-gray-900 via-purple-900 via-pink-900 to-gray-800 animate-bg-pulse">
      {/* CSS per animazione flyUp */}
      <style jsx>{`
        @keyframes flyUp {
          0% {
            transform: translateY(0px) rotate(0deg);
            opacity: 1;
          }
          100% {
            transform: translateY(-200px) rotate(360deg);
            opacity: 0;
          }
        }
      `}</style>

      {/* Flying Emojis */}
      {flyingEmojis.map(emoji => (
        <FlyingEmoji 
          key={emoji.id}
          emoji={emoji.emoji}
          x={emoji.x}
          y={emoji.y}
          onComplete={() => removeFlyingEmoji(emoji.id)}
        />
      ))}

      {/* CHAOS BACKGROUND - Più animazioni anche su mobile */}
      <div className="absolute inset-0 pointer-events-none">
        <div className={`absolute top-10 left-2 md:left-10 w-16 h-16 md:w-32 md:h-32 ${getAnimationClass("animate-float-wobble", "animate-wobble")}`}>
          <Image
            src="/images/vescovo-intervista.png"
            alt="Vescovo"
            width={isMobile ? 64 : 128}
            height={isMobile ? 64 : 128}
            className={`rounded-lg border-2 md:border-4 border-neon-green shadow-lg ${getAnimationClass("animate-neon-flicker", "animate-pulse")}`}
            priority={false}
            loading="lazy"
          />
        </div>

        <div className={`absolute top-20 right-2 md:right-20 w-14 h-14 md:w-28 md:h-28 ${getAnimationClass("animate-wobble", "animate-bounce")}`}>
          <Image
            src="/images/marinaio-pipa.png"
            alt="Marinaio"
            width={isMobile ? 56 : 112}
            height={isMobile ? 56 : 112}
            className={`rounded-lg border-2 md:border-4 border-cyan-400 shadow-lg ${getAnimationClass("animate-tilt-left", "animate-wiggle")}`}
            loading="lazy"
          />
        </div>

        <div className={`absolute bottom-32 left-2 md:left-16 w-18 h-18 md:w-36 md:h-36 ${getAnimationClass("animate-bounce-crazy", "animate-rubber-band")}`}>
          <Image
            src="/images/suora-balla.png"
            alt="Suora"
            width={isMobile ? 72 : 144}
            height={isMobile ? 72 : 144}
            className={`rounded-lg border-2 md:border-4 border-pink-500 shadow-lg ${getAnimationClass("animate-glow", "animate-bounce")}`}
            loading="lazy"
          />
        </div>

        <div className={`absolute bottom-20 right-2 md:right-32 w-16 h-16 md:w-32 md:h-32 ${getAnimationClass("animate-jello", "animate-wobble")}`}>
          <Image
            src="/images/uomo-sudato.png"
            alt="Uomo sudato"
            width={isMobile ? 64 : 128}
            height={isMobile ? 64 : 128}
            className={`rounded-lg border-2 md:border-4 border-red-500 shadow-lg ${getAnimationClass("animate-shake-glow", "animate-shake")}`}
            loading="lazy"
          />
        </div>

        {/* Immagini visibili anche su mobile con animazioni più leggere */}
        <div className={`absolute top-1/2 left-2 md:left-8 w-20 h-20 md:w-40 md:h-40 ${getAnimationClass("animate-rubber-band", "animate-float")}`}>
          <Image
            src="/images/bambino-anatomico.png"
            alt="Bambino anatomico"
            width={isMobile ? 80 : 160}
            height={isMobile ? 80 : 160}
            className={`rounded-lg border-2 md:border-4 border-orange-500 shadow-lg ${getAnimationClass("animate-float", "animate-pulse")}`}
            loading="lazy"
          />
        </div>

        <div className={`absolute top-1/3 right-2 md:right-8 w-18 h-18 md:w-36 md:h-36 ${getAnimationClass("animate-spin-chaos", "animate-spin-slow")}`}>
          <Image
            src="/images/gorilla-uomo.png"
            alt="Gorilla e uomo"
            width={isMobile ? 72 : 144}
            height={isMobile ? 72 : 144}
            className={`rounded-lg border-2 md:border-4 border-purple-500 shadow-lg ${getAnimationClass("animate-glitch", "animate-bounce")}`}
            loading="lazy"
          />
        </div>

        {/* Extra elementi anche su mobile ma più piccoli */}
        <div className={`absolute top-1/4 left-1/3 w-12 h-12 md:w-24 md:h-24 ${getAnimationClass("animate-fly-around", "animate-wobble")}`}>
          <Image
            src="/images/vescovo-intervista.png"
            alt="Extra Vescovo"
            width={isMobile ? 48 : 96}
            height={isMobile ? 48 : 96}
            className="rounded-lg border-2 border-neon-yellow shadow-lg opacity-70"
            loading="lazy"
          />
        </div>

        <div className={`absolute bottom-1/3 right-1/4 w-14 h-14 md:w-28 md:h-28 ${getAnimationClass("animate-tilt-right", "animate-bounce")}`}>
          <Image
            src="/images/marinaio-pipa.png"
            alt="Extra Marinaio"
            width={isMobile ? 56 : 112}
            height={isMobile ? 56 : 112}
            className="rounded-lg border-2 border-neon-purple shadow-lg opacity-80 animate-pulse"
            loading="lazy"
          />
        </div>
      </div>

      {/* FLOATING BOPPY SYMBOLS - Più animazioni su mobile */}
      <div className="absolute inset-0 pointer-events-none">
        <div className={`absolute top-16 right-1/4 text-3xl md:text-6xl text-pink-500 ${getAnimationClass("animate-wobble", "animate-bounce")} font-bold`}>💫</div>
        <div className={`absolute bottom-1/4 left-1/4 text-2xl md:text-4xl text-cyan-400 ${getAnimationClass("animate-bounce-crazy", "animate-rubber-band")} font-bold`}>🎵</div>
        <div className={`absolute top-1/3 left-1/3 text-3xl md:text-5xl text-green-400 ${getAnimationClass("animate-spin-chaos", "animate-wobble")} font-bold`}>💎</div>
        <div className={`absolute top-3/4 right-1/3 text-4xl md:text-7xl text-neon-orange ${getAnimationClass("animate-jello", "animate-bounce")} font-bold`}>🔥</div>
        <div className={`absolute bottom-1/6 left-2/3 text-3xl md:text-4xl text-neon-purple ${getAnimationClass("animate-rubber-band", "animate-wiggle")} font-bold`}>⚡</div>
        <div className={`absolute top-1/6 left-1/6 text-3xl md:text-5xl text-neon-yellow ${getAnimationClass("animate-glitch", "animate-shake")} font-bold`}>🚀</div>
      </div>

      {/* FLOATING EMOJIS - Più attivi su mobile */}
      <div className="absolute inset-0 pointer-events-none">
        <div className={`absolute top-1/4 left-1/2 text-2xl md:text-3xl ${getAnimationClass("animate-bounce-crazy", "animate-rubber-band")}`}>🧠</div>
        <div className={`absolute bottom-1/3 right-1/3 text-2xl md:text-4xl ${getAnimationClass("animate-spin-chaos", "animate-wobble")}`}>💀</div>
        <div className={`absolute top-2/3 left-1/4 text-2xl md:text-3xl ${getAnimationClass("animate-wobble", "animate-bounce")}`}>🔥</div>
        <div className={`absolute top-1/6 right-1/6 text-2xl md:text-4xl ${getAnimationClass("animate-rubber-band", "animate-float")}`}>💪</div>
        <div className={`absolute bottom-1/6 left-1/6 text-2xl md:text-3xl ${getAnimationClass("animate-fly-around", "animate-spin-slow")}`}>🎵</div>
        <div className={`absolute top-3/4 right-2/3 text-2xl md:text-4xl ${getAnimationClass("animate-jello", "animate-wobble")}`}>⚡</div>
        <div className={`absolute top-1/8 left-3/4 text-2xl md:text-3xl ${getAnimationClass("animate-tilt-left", "animate-bounce")}`}>🚀</div>
        <div className={`absolute bottom-2/3 right-1/6 text-2xl md:text-4xl ${getAnimationClass("animate-glitch", "animate-wiggle")}`}>💎</div>
        <div className={`absolute top-5/6 left-1/3 text-2xl md:text-3xl ${getAnimationClass("animate-tilt-right", "animate-rubber-band")}`}>🎯</div>
        <div className={`absolute bottom-1/5 right-3/4 text-2xl md:text-4xl ${getAnimationClass("animate-neon-flicker", "animate-bounce")}`}>⭐</div>
      </div>

      {/* FLOATING TEXT - Più animato su mobile */}
      <div className="absolute inset-0 pointer-events-none">
        <div className={`absolute top-1/5 left-2/3 text-lg md:text-2xl font-bold text-neon-green ${getAnimationClass("animate-wobble", "animate-bounce")}`}>BOPPY</div>
        <div className={`absolute bottom-2/5 right-1/5 text-base md:text-xl font-bold text-neon-pink ${getAnimationClass("animate-glitch", "animate-wiggle")}`}>SKIBIDI</div>
        <div className={`absolute top-2/5 left-1/5 text-lg md:text-2xl font-bold text-cyan-400 ${getAnimationClass("animate-spin-chaos", "animate-rubber-band")}`}>VIRAL</div>
        <div className={`absolute bottom-1/5 right-2/5 text-base md:text-xl font-bold text-yellow-400 ${getAnimationClass("animate-jello", "animate-bounce")}`}>REKT</div>
        <div className={`absolute top-1/8 right-1/8 text-sm md:text-lg font-bold text-neon-purple ${getAnimationClass("animate-bounce-crazy", "animate-wobble")}`}>EPIC</div>
        <div className={`absolute bottom-1/8 left-1/8 text-lg md:text-xl font-bold text-neon-orange ${getAnimationClass("animate-rubber-band", "animate-float")}`}>CHAOS</div>
        <div className={`absolute top-3/5 right-3/5 text-sm md:text-lg font-bold text-neon-yellow ${getAnimationClass("animate-tilt-left", "animate-bounce")}`}>BRAIN ROT</div>
        <div className={`absolute bottom-3/5 left-3/5 text-lg md:text-xl font-bold text-pink-300 ${getAnimationClass("animate-fly-around", "animate-wiggle")}`}>MEME</div>
      </div>

      {/* MAIN CONTENT - Layout più allungato */}
      <div className="relative z-10 flex flex-col items-center justify-start min-h-screen p-4 md:p-8 pt-8 md:pt-16">
        {/* TITLE SECTION */}
        <div className="text-center mb-8 md:mb-12">
          <h1 className={`text-4xl md:text-6xl lg:text-8xl font-black mb-6 bg-gradient-to-r from-orange-500 via-red-500 via-green-500 to-blue-500 bg-clip-text text-transparent ${getAnimationClass("animate-wobble", "animate-bounce")}`}>
            💫 SKIBIDI BOPPY 💫
          </h1>
          <p className={`text-lg md:text-2xl lg:text-3xl font-bold text-white mb-6 drop-shadow-lg px-4 ${getAnimationClass("animate-neon-flicker", "animate-wobble")}`}>
            GET BOPPY OR GET REKT! 🔥💎 THE ULTIMATE MEMECOIN 🚀
          </p>
          <div className={`bg-gradient-to-r from-pink-500 to-green-500 rounded-full px-4 md:px-6 py-2 inline-block ${getAnimationClass("animate-bounce-crazy", "animate-rubber-band")}`}>
            <span className="text-lg md:text-xl font-bold text-white">{viewCount.toLocaleString()}+ VIEWS 🔥</span>
          </div>
        </div>

        {/* MAIN CARD - Layout migliorato */}
        <div className={`bg-gradient-to-br from-pink-500 via-purple-600 to-orange-500 p-6 md:p-8 rounded-2xl md:rounded-3xl border-4 md:border-8 border-green-400 shadow-2xl max-w-sm md:max-w-2xl w-full transform hover:scale-105 transition-transform mb-8 ${getAnimationClass("animate-tilt-left", "animate-wobble")}`}>
          <div className="text-center mb-6 md:mb-8">
            <h2 className={`text-xl md:text-3xl font-black text-cyan-400 mb-4 ${getAnimationClass("animate-wobble", "animate-bounce")}`}>🎵 BOPPY BOPPY ON THE WALL 🎵</h2>
            <h3 className={`text-lg md:text-2xl font-bold text-white mb-6 ${getAnimationClass("animate-jello", "animate-wobble")}`}>{"GET BOPPY OR GET ABSOLUTELY REKT! 💎🔥"}</h3>
            <p className={`text-base md:text-lg font-bold text-yellow-300 ${getAnimationClass("animate-rubber-band", "animate-bounce")}`}>💪🧠</p>
          </div>

          {/* CONTRACT ADDRESS */}
          <div className={`bg-gradient-to-r from-red-500 to-yellow-500 p-4 md:p-5 rounded-xl md:rounded-2xl mb-6 md:mb-8 border-2 md:border-4 border-cyan-400 ${getAnimationClass("animate-glitch", "animate-wobble")}`}>
            <p className={`text-center font-bold text-black mb-2 text-sm md:text-base ${getAnimationClass("animate-neon-flicker", "animate-pulse")}`}>CA:</p>
            <p className="text-center font-mono text-xs md:text-sm text-black break-all">
              6qqLUNacNWSZwM3QHWN8iK5QwfSVBVPBAT6x8A6nbonk
            </p>
          </div>

          {/* MAIN BUTTON */}
          <Button
            onClick={handleBecomeBoppy}
            className={`w-full text-lg md:text-2xl font-black py-5 md:py-6 rounded-xl md:rounded-2xl bg-gradient-to-r from-purple-600 to-green-500 hover:from-green-500 hover:to-purple-600 border-2 md:border-4 border-pink-400 shadow-lg transform transition-all mb-6 ${getAnimationClass("animate-bounce-crazy", "animate-rubber-band")} ${isAnimating ? "animate-jello scale-110" : ""}`}
          >
            BECOME BOPPY 💪
          </Button>

          {/* ACTION BUTTONS - Nuove frasi più creative */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
            <Button 
              onClick={handleActionClick}
              className={`bg-gradient-to-r from-red-500 to-orange-500 font-bold py-3 md:py-4 text-sm md:text-base rounded-lg md:rounded-xl border-2 border-yellow-400 hover:scale-105 transition-transform ${getAnimationClass("animate-wobble", "animate-bounce")}`}
            >
              🌊 GET REKT WAVES
            </Button>
            <Button 
              onClick={handleActionClick}
              className={`bg-gradient-to-r from-orange-500 to-red-500 font-bold py-3 md:py-4 text-sm md:text-base rounded-lg md:rounded-xl border-2 border-yellow-400 hover:scale-105 transition-transform ${getAnimationClass("animate-jello", "animate-wobble")}`}
            >
              💎 DIAMOND HANDS
            </Button>
            <Button 
              onClick={handleActionClick}
              className={`bg-gradient-to-r from-red-600 to-orange-600 font-bold py-3 md:py-4 text-sm md:text-base rounded-lg md:rounded-xl border-2 border-yellow-400 hover:scale-105 transition-transform ${getAnimationClass("animate-tilt-right", "animate-rubber-band")}`}
            >
              🚀 MOON MISSION
            </Button>
          </div>
        </div>

        {/* BOTTOM SECTION */}
        <div className={`bg-gradient-to-r from-green-500 to-red-500 p-6 md:p-8 rounded-xl md:rounded-2xl border-2 md:border-4 border-pink-500 max-w-sm md:max-w-xl w-full mb-8 ${getAnimationClass("animate-rubber-band", "animate-wobble")}`}>
          <p className={`text-center text-lg md:text-xl font-bold text-white mb-4 ${getAnimationClass("animate-neon-flicker", "animate-bounce")}`}>GET BOPPY OR GET REKT ANTHEM! 🔥💎</p>
          <div className={`bg-gradient-to-r from-cyan-400 to-purple-500 p-4 md:p-5 rounded-lg md:rounded-xl ${getAnimationClass("animate-wobble", "animate-rubber-band")}`}>
            <p className="text-center text-xl md:text-2xl font-black text-white">Skibidi Boppy</p>
          </div>
        </div>

        {/* SKIBIDI COLLAGE */}
        <div className={`mb-12 ${getAnimationClass("animate-spin-chaos", "animate-wobble")}`}>
          <Image
            src="/images/skibidi-collage.jpeg"
            alt="Skibidi Boppy Collage"
            width={isMobile ? 250 : 300}
            height={isMobile ? 250 : 300}
            className={`rounded-xl md:rounded-2xl border-4 md:border-8 border-rainbow shadow-2xl ${getAnimationClass("animate-glow", "animate-bounce")}`}
            loading="lazy"
          />
        </div>

        {/* SOCIAL MEDIA SECTION - Più spazio */}
        <div className="w-full max-w-4xl px-4 mb-16">
          <h3 className={`text-2xl md:text-4xl font-black text-center mb-8 md:mb-12 bg-gradient-to-r from-pink-400 to-cyan-400 bg-clip-text text-transparent ${getAnimationClass("animate-wobble", "animate-bounce")}`}>
            JOIN THE SKIBIDI BOPPY COMMUNITY! 🚀
          </h3>

          <div className="flex flex-col md:flex-row flex-wrap justify-center gap-4 md:gap-6 mb-12">
            {/* X Community */}
            <a
              href="https://x.com/i/communities/1943241366957625507"
              target="_blank"
              rel="noopener noreferrer"
              className="group w-full md:w-auto"
            >
              <Button 
                onClick={handleActionClick}
                className={`w-full bg-gradient-to-r from-black to-gray-800 hover:from-gray-800 hover:to-black text-white font-bold py-4 md:py-5 px-8 md:px-10 rounded-xl md:rounded-2xl border-2 md:border-4 border-cyan-400 shadow-lg transform hover:scale-105 md:hover:scale-110 transition-all duration-300 ${getAnimationClass("animate-wobble", "animate-bounce")}`}
              >
                <span className="text-xl md:text-2xl mr-2 md:mr-3">𝕏</span>X COMMUNITY
              </Button>
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/skibidi_boppy_"
              target="_blank"
              rel="noopener noreferrer"
              className="group w-full md:w-auto"
            >
              <Button 
                onClick={handleActionClick}
                className={`w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-purple-600 hover:to-pink-500 text-white font-bold py-4 md:py-5 px-8 md:px-10 rounded-xl md:rounded-2xl border-2 md:border-4 border-yellow-400 shadow-lg transform hover:scale-105 md:hover:scale-110 transition-all duration-300 ${getAnimationClass("animate-tilt-left", "animate-wobble")}`}
              >
                <span className="text-xl md:text-2xl mr-2 md:mr-3">📸</span>
                INSTAGRAM
              </Button>
            </a>

            {/* TikTok */}
            <a href="https://www.tiktok.com/@skibidi.boppy_" target="_blank" rel="noopener noreferrer" className="group w-full md:w-auto">
              <Button 
                onClick={handleActionClick}
                className={`w-full bg-gradient-to-r from-red-500 to-pink-500 hover:from-pink-500 hover:to-red-500 text-white font-bold py-4 md:py-5 px-8 md:px-10 rounded-xl md:rounded-2xl border-2 md:border-4 border-green-400 shadow-lg transform hover:scale-105 md:hover:scale-110 transition-all duration-300 ${getAnimationClass("animate-tilt-right", "animate-rubber-band")}`}
              >
                <span className="text-xl md:text-2xl mr-2 md:mr-3">🎵</span>
                TIKTOK
              </Button>
            </a>
          </div>

          {/* Token Info */}
          <div className="text-center">
            <div className={`bg-gradient-to-r from-purple-600 to-pink-600 p-6 md:p-8 rounded-2xl md:rounded-3xl border-2 md:border-4 border-cyan-400 shadow-2xl max-w-sm md:max-w-md mx-auto ${getAnimationClass("animate-glitch", "animate-wobble")}`}>
              <p className={`text-2xl md:text-3xl font-black text-white mb-3 ${getAnimationClass("animate-neon-flicker", "animate-bounce")}`}>$BOPPY TOKEN</p>
              <p className={`text-base md:text-lg font-bold text-yellow-300 ${getAnimationClass("animate-wobble", "animate-rubber-band")}`}>🚀 TO THE MOON! 🚀</p>
            </div>
          </div>
        </div>
      </div>

      {/* BACKGROUND EFFECTS */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 md:via-white/10 to-transparent animate-pulse pointer-events-none"></div>
    </div>
  )
}