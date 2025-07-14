"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function SkibidiBoppy() {
  const [viewCount, setViewCount] = useState(100000000)
  const [isAnimating, setIsAnimating] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [reducedMotion, setReducedMotion] = useState(false)

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

  const handleBecomeBoppy = () => {
    setIsAnimating(true)
    setTimeout(() => setIsAnimating(false), 1000)
  }

  // Reduced animations for mobile and accessibility
  const getAnimationClass = (desktopAnim: string, mobileAnim: string = "animate-pulse") => {
    if (reducedMotion) return ""
    return isMobile ? mobileAnim : desktopAnim
  }

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-gray-900 via-purple-900 via-pink-900 to-gray-800 animate-bg-pulse">
      {/* CHAOS BACKGROUND - Ridotto su mobile */}
      <div className="absolute inset-0 pointer-events-none">
        <div className={`absolute top-10 left-2 md:left-10 w-16 h-16 md:w-32 md:h-32 ${getAnimationClass("animate-float-wobble", "animate-float")}`}>
          <Image
            src="/images/vescovo-intervista.png"
            alt="Vescovo"
            width={isMobile ? 64 : 128}
            height={isMobile ? 64 : 128}
            className={`rounded-lg border-2 md:border-4 border-neon-green shadow-lg ${getAnimationClass("animate-neon-flicker", "")}`}
            priority={false}
            loading="lazy"
          />
        </div>

        <div className={`absolute top-20 right-2 md:right-20 w-14 h-14 md:w-28 md:h-28 ${getAnimationClass("animate-wobble", "animate-pulse")}`}>
          <Image
            src="/images/marinaio-pipa.png"
            alt="Marinaio"
            width={isMobile ? 56 : 112}
            height={isMobile ? 56 : 112}
            className={`rounded-lg border-2 md:border-4 border-cyan-400 shadow-lg ${getAnimationClass("animate-tilt-left", "")}`}
            loading="lazy"
          />
        </div>

        <div className={`absolute bottom-32 left-2 md:left-16 w-18 h-18 md:w-36 md:h-36 ${getAnimationClass("animate-bounce-crazy", "animate-bounce")}`}>
          <Image
            src="/images/suora-balla.png"
            alt="Suora"
            width={isMobile ? 72 : 144}
            height={isMobile ? 72 : 144}
            className={`rounded-lg border-2 md:border-4 border-pink-500 shadow-lg ${getAnimationClass("animate-glow", "")}`}
            loading="lazy"
          />
        </div>

        <div className={`absolute bottom-20 right-2 md:right-32 w-16 h-16 md:w-32 md:h-32 ${getAnimationClass("animate-jello", "animate-pulse")}`}>
          <Image
            src="/images/uomo-sudato.png"
            alt="Uomo sudato"
            width={isMobile ? 64 : 128}
            height={isMobile ? 64 : 128}
            className={`rounded-lg border-2 md:border-4 border-red-500 shadow-lg ${getAnimationClass("animate-shake-glow", "")}`}
            loading="lazy"
          />
        </div>

        {/* Nascondi alcune immagini su mobile per performance */}
        <div className={`hidden md:block absolute top-1/2 left-8 w-40 h-40 ${getAnimationClass("animate-rubber-band", "animate-pulse")}`}>
          <Image
            src="/images/bambino-anatomico.png"
            alt="Bambino anatomico"
            width={160}
            height={160}
            className={`rounded-lg border-4 border-orange-500 shadow-lg ${getAnimationClass("animate-float", "")}`}
            loading="lazy"
          />
        </div>

        <div className={`hidden md:block absolute top-1/3 right-8 w-36 h-36 ${getAnimationClass("animate-spin-chaos", "animate-spin")}`}>
          <Image
            src="/images/gorilla-uomo.png"
            alt="Gorilla e uomo"
            width={144}
            height={144}
            className={`rounded-lg border-4 border-purple-500 shadow-lg ${getAnimationClass("animate-glitch", "")}`}
            loading="lazy"
          />
        </div>

        {/* Extra elementi solo su desktop */}
        {!isMobile && (
          <>
            <div className={`absolute top-1/4 left-1/3 w-24 h-24 ${getAnimationClass("animate-fly-around", "")}`}>
              <Image
                src="/images/vescovo-intervista.png"
                alt="Extra Vescovo"
                width={96}
                height={96}
                className="rounded-lg border-2 border-neon-yellow shadow-lg opacity-70"
                loading="lazy"
              />
            </div>

            <div className={`absolute bottom-1/3 right-1/4 w-28 h-28 ${getAnimationClass("animate-tilt-right", "")}`}>
              <Image
                src="/images/marinaio-pipa.png"
                alt="Extra Marinaio"
                width={112}
                height={112}
                className="rounded-lg border-2 border-neon-purple shadow-lg opacity-80 animate-pulse"
                loading="lazy"
              />
            </div>
          </>
        )}
      </div>

      {/* FLOATING BOPPY SYMBOLS - Ridotti su mobile */}
      <div className="absolute inset-0 pointer-events-none">
        <div className={`absolute top-16 right-1/4 text-3xl md:text-6xl text-pink-500 ${getAnimationClass("animate-wobble", "animate-pulse")} font-bold`}>💫</div>
        <div className={`absolute bottom-1/4 left-1/4 text-2xl md:text-4xl text-cyan-400 ${getAnimationClass("animate-bounce-crazy", "animate-bounce")} font-bold`}>🎵</div>
        <div className={`absolute top-1/3 left-1/3 text-3xl md:text-5xl text-green-400 ${getAnimationClass("animate-spin-chaos", "animate-spin")} font-bold`}>💎</div>
        
        {/* Simboli extra solo su desktop */}
        {!isMobile && (
          <>
            <div className={`absolute top-3/4 right-1/3 text-7xl text-neon-orange ${getAnimationClass("animate-jello", "")} font-bold`}>🔥</div>
            <div className={`absolute bottom-1/6 left-2/3 text-4xl text-neon-purple ${getAnimationClass("animate-rubber-band", "")} font-bold`}>⚡</div>
            <div className={`absolute top-1/6 left-1/6 text-5xl text-neon-yellow ${getAnimationClass("animate-glitch", "")} font-bold`}>🚀</div>
          </>
        )}
      </div>

      {/* FLOATING EMOJIS - Solo essenziali su mobile */}
      <div className="absolute inset-0 pointer-events-none">
        <div className={`absolute top-1/4 left-1/2 text-2xl md:text-3xl ${getAnimationClass("animate-bounce-crazy", "animate-bounce")}`}>🧠</div>
        <div className={`absolute bottom-1/3 right-1/3 text-2xl md:text-4xl ${getAnimationClass("animate-spin-chaos", "animate-spin")}`}>💀</div>
        <div className={`absolute top-2/3 left-1/4 text-2xl md:text-3xl ${getAnimationClass("animate-wobble", "animate-pulse")}`}>🔥</div>
        <div className={`absolute top-1/6 right-1/6 text-2xl md:text-4xl ${getAnimationClass("animate-rubber-band", "animate-pulse")}`}>💪</div>
        
        {/* Emoji extra solo su desktop */}
        {!isMobile && (
          <>
            <div className={`absolute bottom-1/6 left-1/6 text-3xl ${getAnimationClass("animate-fly-around", "")}`}>🎵</div>
            <div className={`absolute top-3/4 right-2/3 text-4xl ${getAnimationClass("animate-jello", "")}`}>⚡</div>
            <div className={`absolute top-1/8 left-3/4 text-3xl ${getAnimationClass("animate-tilt-left", "")}`}>🚀</div>
            <div className={`absolute bottom-2/3 right-1/6 text-4xl ${getAnimationClass("animate-glitch", "")}`}>💎</div>
            <div className={`absolute top-5/6 left-1/3 text-3xl ${getAnimationClass("animate-tilt-right", "")}`}>🎯</div>
            <div className={`absolute bottom-1/5 right-3/4 text-4xl ${getAnimationClass("animate-neon-flicker", "")}`}>⭐</div>
          </>
        )}
      </div>

      {/* FLOATING TEXT - Stile caos - SOLO SKIBIDI BOPPY */}
      <div className="absolute inset-0 pointer-events-none">
        <div className={`absolute top-1/5 left-2/3 text-xl md:text-2xl font-bold text-neon-green ${getAnimationClass("animate-wobble", "animate-pulse")}`}>BOPPY</div>
        <div className={`absolute bottom-2/5 right-1/5 text-lg md:text-xl font-bold text-neon-pink ${getAnimationClass("animate-glitch", "animate-pulse")}`}>SKIBIDI</div>
        <div className={`absolute top-2/5 left-1/5 text-xl md:text-2xl font-bold text-cyan-400 ${getAnimationClass("animate-spin-chaos", "animate-pulse")}`}>VIRAL</div>
        <div className={`absolute bottom-1/5 right-2/5 text-lg md:text-xl font-bold text-yellow-400 ${getAnimationClass("animate-jello", "animate-pulse")}`}>BASED</div>
        
        {/* Testi extra solo su desktop */}
        {!isMobile && (
          <>
            <div className={`absolute top-1/8 right-1/8 text-lg font-bold text-neon-purple ${getAnimationClass("animate-bounce-crazy", "")}`}>EPIC</div>
            <div className={`absolute bottom-1/8 left-1/8 text-xl font-bold text-neon-orange ${getAnimationClass("animate-rubber-band", "")}`}>CHAOS</div>
            <div className={`absolute top-3/5 right-3/5 text-lg font-bold text-neon-yellow ${getAnimationClass("animate-tilt-left", "")}`}>BRAIN ROT</div>
            <div className={`absolute bottom-3/5 left-3/5 text-xl font-bold text-pink-300 ${getAnimationClass("animate-fly-around", "")}`}>MEME</div>
          </>
        )}
      </div>

      {/* MAIN CONTENT */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-4 md:p-8">
        {/* TITLE SECTION */}
        <div className="text-center mb-6 md:mb-8">
          <h1 className={`text-4xl md:text-6xl lg:text-8xl font-black mb-4 bg-gradient-to-r from-orange-500 via-red-500 via-green-500 to-blue-500 bg-clip-text text-transparent ${getAnimationClass("animate-wobble", "animate-pulse")}`}>
            💫 SKIBIDI BOPPY 💫
          </h1>
          <p className={`text-lg md:text-2xl lg:text-3xl font-bold text-white mb-4 drop-shadow-lg px-4 ${getAnimationClass("animate-neon-flicker", "animate-pulse")}`}>
            GET BOPPY OR GET REKT! 🔥💎 THE ULTIMATE MEMECOIN 🚀
          </p>
          <div className={`bg-gradient-to-r from-pink-500 to-green-500 rounded-full px-4 md:px-6 py-2 inline-block ${getAnimationClass("animate-bounce-crazy", "animate-bounce")}`}>
            <span className="text-lg md:text-xl font-bold text-white">{viewCount.toLocaleString()}+ VIEWS 🔥</span>
          </div>
        </div>

        {/* MAIN CARD - Responsive */}
        <div className={`bg-gradient-to-br from-pink-500 via-purple-600 to-orange-500 p-4 md:p-8 rounded-2xl md:rounded-3xl border-4 md:border-8 border-green-400 shadow-2xl max-w-xs md:max-w-2xl w-full transform hover:scale-105 transition-transform ${getAnimationClass("animate-tilt-left", "")}`}>
          <div className="text-center mb-4 md:mb-6">
            <h2 className={`text-xl md:text-3xl font-black text-cyan-400 mb-2 ${getAnimationClass("animate-wobble", "animate-pulse")}`}>🎵 BOPPY BOPPY ON THE WALL 🎵</h2>
            <h3 className={`text-lg md:text-2xl font-bold text-white mb-4 ${getAnimationClass("animate-jello", "animate-pulse")}`}>{"GET BOPPY OR GET ABSOLUTELY REKT! 💎🔥"}</h3>
            <p className={`text-base md:text-lg font-bold text-yellow-300 ${getAnimationClass("animate-rubber-band", "animate-pulse")}`}>💪🧠</p>
          </div>

          {/* CONTRACT ADDRESS - Responsive */}
          <div className={`bg-gradient-to-r from-red-500 to-yellow-500 p-3 md:p-4 rounded-xl md:rounded-2xl mb-4 md:mb-6 border-2 md:border-4 border-cyan-400 ${getAnimationClass("animate-glitch", "animate-pulse")}`}>
            <p className={`text-center font-bold text-black mb-2 text-sm md:text-base ${getAnimationClass("animate-neon-flicker", "")}`}>CA:</p>
            <p className="text-center font-mono text-xs md:text-sm text-black break-all">
              4N5jkEmdTx1ZQzjb4XowDJvHDzckByxMAf9Xa4bonk
            </p>
          </div>

          {/* MAIN BUTTON - Mobile optimized */}
          <Button
            onClick={handleBecomeBoppy}
            className={`w-full text-lg md:text-2xl font-black py-4 md:py-6 rounded-xl md:rounded-2xl bg-gradient-to-r from-purple-600 to-green-500 hover:from-green-500 hover:to-purple-600 border-2 md:border-4 border-pink-400 shadow-lg transform transition-all ${getAnimationClass("animate-bounce-crazy", "animate-pulse")} ${isAnimating ? "animate-rubber-band scale-110" : ""}`}
          >
            BECOME BOPPY 💪
          </Button>

          {/* ACTION BUTTONS - Responsive grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-4 mt-4 md:mt-6">
            <Button className={`bg-gradient-to-r from-red-500 to-orange-500 font-bold py-2 md:py-3 text-sm md:text-base rounded-lg md:rounded-xl border-2 border-yellow-400 hover:scale-105 transition-transform ${getAnimationClass("animate-wobble", "animate-pulse")}`}>
              💋 LIP TOUCH
            </Button>
            <Button className={`bg-gradient-to-r from-orange-500 to-red-500 font-bold py-2 md:py-3 text-sm md:text-base rounded-lg md:rounded-xl border-2 border-yellow-400 hover:scale-105 transition-transform ${getAnimationClass("animate-jello", "animate-pulse")}`}>
              ⚠️ NECK TOUCH
            </Button>
            <Button className={`bg-gradient-to-r from-red-600 to-orange-600 font-bold py-2 md:py-3 text-sm md:text-base rounded-lg md:rounded-xl border-2 border-yellow-400 hover:scale-105 transition-transform ${getAnimationClass("animate-tilt-right", "animate-pulse")}`}>
              🔄 BACKFLIP
            </Button>
          </div>
        </div>

        {/* BOTTOM SECTION - Mobile optimized */}
        <div className={`mt-6 md:mt-8 bg-gradient-to-r from-green-500 to-red-500 p-4 md:p-6 rounded-xl md:rounded-2xl border-2 md:border-4 border-pink-500 max-w-sm md:max-w-xl w-full ${getAnimationClass("animate-rubber-band", "animate-pulse")}`}>
          <p className={`text-center text-lg md:text-xl font-bold text-white mb-4 ${getAnimationClass("animate-neon-flicker", "animate-pulse")}`}>GET BOPPY OR GET REKT ANTHEM! 🔥💎</p>
          <div className={`bg-gradient-to-r from-cyan-400 to-purple-500 p-3 md:p-4 rounded-lg md:rounded-xl ${getAnimationClass("animate-wobble", "animate-pulse")}`}>
            <p className="text-center text-xl md:text-2xl font-black text-white">Skibidi Boppy</p>
          </div>
        </div>

        {/* SKIBIDI COLLAGE - Responsive */}
        <div className={`mt-6 md:mt-8 ${getAnimationClass("animate-spin-chaos", "animate-pulse")}`}>
          <Image
            src="/images/skibidi-collage.jpeg"
            alt="Skibidi Boppy Collage"
            width={isMobile ? 200 : 300}
            height={isMobile ? 200 : 300}
            className={`rounded-xl md:rounded-2xl border-4 md:border-8 border-rainbow shadow-2xl ${getAnimationClass("animate-glow", "")}`}
            loading="lazy"
          />
        </div>
      </div>

      {/* BACKGROUND EFFECTS - Ridotti su mobile */}
      <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/5 md:via-white/10 to-transparent animate-pulse pointer-events-none`}></div>

      {/* SOCIAL MEDIA SECTION - Mobile optimized */}
      <div className="relative z-10 mt-8 md:mt-12 mb-6 md:mb-8 px-4">
        <h3 className={`text-2xl md:text-4xl font-black text-center mb-6 md:mb-8 bg-gradient-to-r from-pink-400 to-cyan-400 bg-clip-text text-transparent ${getAnimationClass("animate-wobble", "animate-pulse")}`}>
          JOIN THE SKIBIDI BOPPY COMMUNITY! 🚀
        </h3>

        {/* Mobile: Stack vertically, Desktop: Horizontal */}
        <div className="flex flex-col md:flex-row flex-wrap justify-center gap-4 md:gap-6">
          {/* X Community */}
          <a
            href="https://x.com/i/communities/1943241366957625507"
            target="_blank"
            rel="noopener noreferrer"
            className="group w-full md:w-auto"
          >
            <Button className={`w-full bg-gradient-to-r from-black to-gray-800 hover:from-gray-800 hover:to-black text-white font-bold py-3 md:py-4 px-6 md:px-8 rounded-xl md:rounded-2xl border-2 md:border-4 border-cyan-400 shadow-lg transform hover:scale-105 md:hover:scale-110 transition-all duration-300 ${getAnimationClass("group-hover:animate-jello animate-wobble", "animate-pulse")}`}>
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
            <Button className={`w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-purple-600 hover:to-pink-500 text-white font-bold py-3 md:py-4 px-6 md:px-8 rounded-xl md:rounded-2xl border-2 md:border-4 border-yellow-400 shadow-lg transform hover:scale-105 md:hover:scale-110 transition-all duration-300 ${getAnimationClass("group-hover:animate-rubber-band animate-tilt-left", "animate-pulse")}`}>
              <span className="text-xl md:text-2xl mr-2 md:mr-3">📸</span>
              INSTAGRAM
            </Button>
          </a>

          {/* TikTok */}
          <a href="https://www.tiktok.com/@skibidi.boppy_" target="_blank" rel="noopener noreferrer" className="group w-full md:w-auto">
            <Button className={`w-full bg-gradient-to-r from-red-500 to-pink-500 hover:from-pink-500 hover:to-red-500 text-white font-bold py-3 md:py-4 px-6 md:px-8 rounded-xl md:rounded-2xl border-2 md:border-4 border-green-400 shadow-lg transform hover:scale-105 md:hover:scale-110 transition-all duration-300 ${getAnimationClass("group-hover:animate-bounce-crazy animate-tilt-right", "animate-pulse")}`}>
              <span className="text-xl md:text-2xl mr-2 md:mr-3">🎵</span>
              TIKTOK
            </Button>
          </a>
        </div>

        {/* Token Info - Mobile optimized */}
        <div className="mt-6 md:mt-8 text-center px-4">
          <div className={`bg-gradient-to-r from-purple-600 to-pink-600 p-4 md:p-6 rounded-2xl md:rounded-3xl border-2 md:border-4 border-cyan-400 shadow-2xl max-w-sm md:max-w-md mx-auto ${getAnimationClass("animate-glitch", "animate-pulse")}`}>
            <p className={`text-2xl md:text-3xl font-black text-white mb-2 ${getAnimationClass("animate-neon-flicker", "animate-pulse")}`}>$BOPPY TOKEN</p>
            <p className={`text-base md:text-lg font-bold text-yellow-300 ${getAnimationClass("animate-wobble", "animate-pulse")}`}>🚀 TO THE MOON! 🚀</p>
          </div>
        </div>
      </div>

      {/* Extra chaos floating elements - Solo desktop */}
      {!isMobile && (
        <>
          <div className={`absolute top-12 left-12 w-16 h-16 ${getAnimationClass("animate-fly-around", "")} opacity-60 pointer-events-none`}>
            <div className={`text-4xl ${getAnimationClass("animate-spin-chaos", "")}`}>🎭</div>
          </div>
          <div className={`absolute bottom-12 right-12 w-16 h-16 ${getAnimationClass("animate-rubber-band", "")} opacity-70 pointer-events-none`}>
            <div className={`text-3xl ${getAnimationClass("animate-wobble", "")}`}>🎪</div>
          </div>
          <div className={`absolute top-2/3 left-4 w-12 h-12 ${getAnimationClass("animate-jello", "")} opacity-50 pointer-events-none`}>
            <div className={`text-2xl ${getAnimationClass("animate-tilt-left", "")}`}>🎨</div>
          </div>
          <div className={`absolute bottom-1/4 right-8 w-14 h-14 ${getAnimationClass("animate-bounce-crazy", "")} opacity-80 pointer-events-none`}>
            <div className={`text-3xl ${getAnimationClass("animate-glitch", "")}`}>🎮</div>
          </div>
        </>
      )}

      {/* Floating text variations - Solo desktop */}
      {!isMobile && (
        <>
          <div className={`absolute top-1/12 right-1/3 text-lg font-bold text-neon-green ${getAnimationClass("animate-fly-around", "")} opacity-70 pointer-events-none`}>SKIBIDI</div>
          <div className={`absolute bottom-1/12 left-1/4 text-xl font-bold text-neon-pink ${getAnimationClass("animate-rubber-band", "")} opacity-60 pointer-events-none`}>BOPPY</div>
          <div className={`absolute top-4/5 right-1/6 text-lg font-bold text-neon-yellow ${getAnimationClass("animate-jello", "")} opacity-75 pointer-events-none`}>VIRAL</div>
          <div className={`absolute bottom-4/5 left-1/8 text-xl font-bold text-neon-purple ${getAnimationClass("animate-wobble", "")} opacity-65 pointer-events-none`}>CHAOS</div>
        </>
      )}

      {/* Additional floating screenshots - Solo desktop */}
      {!isMobile && (
        <>
          <div className={`absolute top-24 left-1/4 w-20 h-20 ${getAnimationClass("animate-fly-around", "")} opacity-40 pointer-events-none`}>
            <Image
              src="/images/skibidi-collage.jpeg"
              alt="Extra chaos"
              width={80}
              height={80}
              className={`rounded-lg border-2 border-neon-green ${getAnimationClass("animate-glow", "")}`}
              loading="lazy"
            />
          </div>
          <div className={`absolute bottom-24 right-1/3 w-16 h-16 ${getAnimationClass("animate-spin-chaos", "")} opacity-50 pointer-events-none`}>
            <Image
              src="/images/skibidi-collage.jpeg"
              alt="Extra chaos 2"
              width={64}
              height={64}
              className={`rounded-lg border-2 border-neon-pink ${getAnimationClass("animate-wobble", "")}`}
              loading="lazy"
            />
          </div>
        </>
      )}
    </div>
  )
}