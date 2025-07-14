"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function SKIBIDI BOPPYBoyClone() {
  const [viewCount, setViewCount] = useState(100000000)
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setViewCount((prev) => prev + Math.floor(Math.random() * 1000))
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  const handleBecomeSKIBIDI BOPPY = () => {
    setIsAnimating(true)
    setTimeout(() => setIsAnimating(false), 1000)
  }

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-gray-900 via-purple-900 via-pink-900 to-gray-800 animate-bg-pulse">
      {/* CHAOS BACKGROUND - Floating Images */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 animate-float-wobble">
          <Image
            src="/images/vescovo-intervista.png"
            alt="Vescovo"
            width={128}
            height={128}
            className="rounded-lg border-4 border-neon-green shadow-lg animate-neon-flicker"
          />
        </div>

        <div className="absolute top-20 right-20 w-28 h-28 animate-wobble">
          <Image
            src="/images/marinaio-pipa.png"
            alt="Marinaio"
            width={112}
            height={112}
            className="rounded-lg border-4 border-cyan-400 shadow-lg animate-tilt-left"
          />
        </div>

        <div className="absolute bottom-32 left-16 w-36 h-36 animate-bounce-crazy">
          <Image
            src="/images/suora-balla.png"
            alt="Suora"
            width={144}
            height={144}
            className="rounded-lg border-4 border-pink-500 shadow-lg animate-glow"
          />
        </div>

        <div className="absolute bottom-20 right-32 w-32 h-32 animate-jello">
          <Image
            src="/images/uomo-sudato.png"
            alt="Uomo sudato"
            width={128}
            height={128}
            className="rounded-lg border-4 border-red-500 shadow-lg animate-shake-glow"
          />
        </div>

        <div className="absolute top-1/2 left-8 w-40 h-40 animate-rubber-band">
          <Image
            src="/images/bambino-anatomico.png"
            alt="Bambino anatomico"
            width={160}
            height={160}
            className="rounded-lg border-4 border-orange-500 shadow-lg animate-float"
          />
        </div>

        <div className="absolute top-1/3 right-8 w-36 h-36 animate-spin-chaos">
          <Image
            src="/images/gorilla-uomo.png"
            alt="Gorilla e uomo"
            width={144}
            height={144}
            className="rounded-lg border-4 border-purple-500 shadow-lg animate-glitch"
          />
        </div>

        {/* Extra floating images per più caos */}
        <div className="absolute top-1/4 left-1/3 w-24 h-24 animate-fly-around">
          <Image
            src="/images/vescovo-intervista.png"
            alt="Extra Vescovo"
            width={96}
            height={96}
            className="rounded-lg border-2 border-neon-yellow shadow-lg opacity-70"
          />
        </div>

        <div className="absolute bottom-1/3 right-1/4 w-28 h-28 animate-tilt-right">
          <Image
            src="/images/marinaio-pipa.png"
            alt="Extra Marinaio"
            width={112}
            height={112}
            className="rounded-lg border-2 border-neon-purple shadow-lg opacity-80 animate-pulse"
          />
        </div>
      </div>

      {/* FLOATING SKIBIDI BOPPY SYMBOLS - Più caotici */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-16 right-1/4 text-6xl text-pink-500 animate-wobble font-bold">Σ</div>
        <div className="absolute bottom-1/4 left-1/4 text-4xl text-cyan-400 animate-bounce-crazy font-bold">Σ</div>
        <div className="absolute top-1/3 left-1/3 text-5xl text-green-400 animate-spin-chaos font-bold">Σ</div>
        <div className="absolute top-3/4 right-1/3 text-7xl text-neon-orange animate-jello font-bold">Σ</div>
        <div className="absolute bottom-1/6 left-2/3 text-4xl text-neon-purple animate-rubber-band font-bold">Σ</div>
        <div className="absolute top-1/6 left-1/6 text-5xl text-neon-yellow animate-glitch font-bold">Σ</div>
      </div>

      {/* FLOATING EMOJIS - Più caos */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 text-3xl animate-bounce-crazy">🧠</div>
        <div className="absolute bottom-1/3 right-1/3 text-4xl animate-spin-chaos">💀</div>
        <div className="absolute top-2/3 left-1/4 text-3xl animate-wobble">🔥</div>
        <div className="absolute top-1/6 right-1/6 text-4xl animate-rubber-band">💪</div>
        <div className="absolute bottom-1/6 left-1/6 text-3xl animate-fly-around">🎵</div>
        <div className="absolute top-3/4 right-2/3 text-4xl animate-jello">⚡</div>
        <div className="absolute top-1/8 left-3/4 text-3xl animate-tilt-left">🚀</div>
        <div className="absolute bottom-2/3 right-1/6 text-4xl animate-glitch">💎</div>
        <div className="absolute top-5/6 left-1/3 text-3xl animate-tilt-right">🎯</div>
        <div className="absolute bottom-1/5 right-3/4 text-4xl animate-neon-flicker">⭐</div>
      </div>

      {/* FLOATING TEXT - Stile caos */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/5 left-2/3 text-2xl font-bold text-neon-green animate-wobble">BOPPY</div>
        <div className="absolute bottom-2/5 right-1/5 text-xl font-bold text-neon-pink animate-glitch">SKIBIDI</div>
        <div className="absolute top-2/5 left-1/5 text-2xl font-bold text-cyan-400 animate-spin-chaos">SKIBIDI BOPPY</div>
        <div className="absolute bottom-1/5 right-2/5 text-xl font-bold text-yellow-400 animate-jello">BASED</div>
        <div className="absolute top-1/8 right-1/8 text-lg font-bold text-neon-purple animate-bounce-crazy">VIRAL</div>
        <div className="absolute bottom-1/8 left-1/8 text-xl font-bold text-neon-orange animate-rubber-band">CHAOS</div>
        <div className="absolute top-3/5 right-3/5 text-lg font-bold text-neon-yellow animate-tilt-left">BRAIN ROT</div>
        <div className="absolute bottom-3/5 left-3/5 text-xl font-bold text-pink-300 animate-fly-around">MEME</div>
      </div>

      {/* MAIN CONTENT */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-8">
        {/* TITLE SECTION */}
        <div className="text-center mb-8">
          <h1 className="text-6xl md:text-8xl font-black mb-4 bg-gradient-to-r from-orange-500 via-red-500 via-green-500 to-blue-500 bg-clip-text text-transparent animate-wobble">
            Σ SKIBIDI BOPPY Σ
          </h1>
          <p className="text-2xl md:text-3xl font-bold text-white mb-4 drop-shadow-lg animate-neon-flicker">
            THE MOST VIRAL MEMECOIN $BOPPY 🧠💀
          </p>
          <div className="bg-gradient-to-r from-pink-500 to-green-500 rounded-full px-6 py-2 inline-block animate-bounce-crazy">
            <span className="text-xl font-bold text-white">{viewCount.toLocaleString()}+ VIEWS 🔥</span>
          </div>
        </div>

        {/* MAIN CARD */}
        <div className="bg-gradient-to-br from-pink-500 via-purple-600 to-orange-500 p-8 rounded-3xl border-8 border-green-400 shadow-2xl max-w-2xl w-full transform hover:scale-105 transition-transform animate-tilt-left">
          <div className="text-center mb-6">
            <h2 className="text-3xl font-black text-cyan-400 mb-2 animate-wobble">🎵 SKIBIDI BOPPY SKIBIDI BOPPY ON THE WALL 🎵</h2>
            <h3 className="text-2xl font-bold text-white mb-4 animate-jello">{"WHO'S THE MOST BASED OF THEM ALL???"}</h3>
            <p className="text-lg font-bold text-yellow-300 animate-rubber-band">💪🧠</p>
          </div>

          {/* CONTRACT ADDRESS */}
          <div className="bg-gradient-to-r from-red-500 to-yellow-500 p-4 rounded-2xl mb-6 border-4 border-cyan-400 animate-glitch">
            <p className="text-center font-bold text-black mb-2 animate-neon-flicker">CA:</p>
            <p className="text-center font-mono text-sm text-black break-all">
              4N5jkEmdTx1ZQzjb4XowDJvHDzckByxMAf9Xa4bonk
            </p>
          </div>

          {/* MAIN BUTTON */}
          <Button
            onClick={handleBecomeSKIBIDI BOPPY}
            className={`w-full text-2xl font-black py-6 rounded-2xl bg-gradient-to-r from-purple-600 to-green-500 hover:from-green-500 hover:to-purple-600 border-4 border-pink-400 shadow-lg transform transition-all animate-bounce-crazy ${isAnimating ? "animate-rubber-band scale-110" : ""}`}
          >
            BECOME SKIBIDI BOPPY 💪
          </Button>

          {/* ACTION BUTTONS */}
          <div className="grid grid-cols-3 gap-4 mt-6">
            <Button className="bg-gradient-to-r from-red-500 to-orange-500 font-bold py-3 rounded-xl border-2 border-yellow-400 hover:scale-105 transition-transform animate-wobble">
              💋 LIP TOUCH
            </Button>
            <Button className="bg-gradient-to-r from-orange-500 to-red-500 font-bold py-3 rounded-xl border-2 border-yellow-400 hover:scale-105 transition-transform animate-jello">
              ⚠️ NECK TOUCH
            </Button>
            <Button className="bg-gradient-to-r from-red-600 to-orange-600 font-bold py-3 rounded-xl border-2 border-yellow-400 hover:scale-105 transition-transform animate-tilt-right">
              🔄 BACKFLIP
            </Button>
          </div>
        </div>

        {/* BOTTOM SECTION */}
        <div className="mt-8 bg-gradient-to-r from-green-500 to-red-500 p-6 rounded-2xl border-4 border-pink-500 max-w-xl w-full animate-rubber-band">
          <p className="text-center text-xl font-bold text-white mb-4 animate-neon-flicker">WATCH THE BRAIN ROT ANTHEM 🧠🎵</p>
          <div className="bg-gradient-to-r from-cyan-400 to-purple-500 p-4 rounded-xl animate-wobble">
            <p className="text-center text-2xl font-black text-white">SKIBIDI BOPPY Boppy</p>
          </div>
        </div>

        {/* SKIBIDI COLLAGE */}
        <div className="mt-8 animate-spin-chaos">
          <Image
            src="/images/skibidi-collage.jpeg"
            alt="Skibidi Boppy Collage"
            width={300}
            height={300}
            className="rounded-2xl border-8 border-rainbow shadow-2xl animate-glow"
          />
        </div>
      </div>

      {/* BACKGROUND EFFECTS */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse pointer-events-none"></div>

      {/* SOCIAL MEDIA SECTION */}
      <div className="relative z-10 mt-12 mb-8">
        <h3 className="text-4xl font-black text-center mb-8 bg-gradient-to-r from-pink-400 to-cyan-400 bg-clip-text text-transparent animate-wobble">
          JOIN THE SKIBIDI BOPPY COMMUNITY! 🚀
        </h3>

        <div className="flex flex-wrap justify-center gap-6">
          {/* X Community */}
          <a
            href="https://x.com/i/communities/1943241366957625507"
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <Button className="bg-gradient-to-r from-black to-gray-800 hover:from-gray-800 hover:to-black text-white font-bold py-4 px-8 rounded-2xl border-4 border-cyan-400 shadow-lg transform hover:scale-110 transition-all duration-300 group-hover:animate-jello animate-wobble">
              <span className="text-2xl mr-3">𝕏</span>X COMMUNITY
            </Button>
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/skibidi_boppy_"
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <Button className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-purple-600 hover:to-pink-500 text-white font-bold py-4 px-8 rounded-2xl border-4 border-yellow-400 shadow-lg transform hover:scale-110 transition-all duration-300 group-hover:animate-rubber-band animate-tilt-left">
              <span className="text-2xl mr-3">📸</span>
              INSTAGRAM
            </Button>
          </a>

          {/* TikTok */}
          <a href="https://www.tiktok.com/@skibidi.boppy_" target="_blank" rel="noopener noreferrer" className="group">
            <Button className="bg-gradient-to-r from-red-500 to-pink-500 hover:from-pink-500 hover:to-red-500 text-white font-bold py-4 px-8 rounded-2xl border-4 border-green-400 shadow-lg transform hover:scale-110 transition-all duration-300 group-hover:animate-bounce-crazy animate-tilt-right">
              <span className="text-2xl mr-3">🎵</span>
              TIKTOK
            </Button>
          </a>
        </div>

        {/* Token Info */}
        <div className="mt-8 text-center">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-6 rounded-3xl border-4 border-cyan-400 shadow-2xl max-w-md mx-auto animate-glitch">
            <p className="text-3xl font-black text-white mb-2 animate-neon-flicker">$BOPPY TOKEN</p>
            <p className="text-lg font-bold text-yellow-300 animate-wobble">🚀 TO THE MOON! 🚀</p>
          </div>
        </div>
      </div>

      {/* Extra chaos floating elements */}
      <div className="absolute top-12 left-12 w-16 h-16 animate-fly-around opacity-60 pointer-events-none">
        <div className="text-4xl animate-spin-chaos">🎭</div>
      </div>
      <div className="absolute bottom-12 right-12 w-16 h-16 animate-rubber-band opacity-70 pointer-events-none">
        <div className="text-3xl animate-wobble">🎪</div>
      </div>
      <div className="absolute top-2/3 left-4 w-12 h-12 animate-jello opacity-50 pointer-events-none">
        <div className="text-2xl animate-tilt-left">🎨</div>
      </div>
      <div className="absolute bottom-1/4 right-8 w-14 h-14 animate-bounce-crazy opacity-80 pointer-events-none">
        <div className="text-3xl animate-glitch">🎮</div>
      </div>

      {/* Floating SKIBIDI BOPPY text variations */}
      <div className="absolute top-1/12 right-1/3 text-lg font-bold text-neon-green animate-fly-around opacity-70 pointer-events-none">SKIBIDI</div>
      <div className="absolute bottom-1/12 left-1/4 text-xl font-bold text-neon-pink animate-rubber-band opacity-60 pointer-events-none">BOPPY</div>
      <div className="absolute top-4/5 right-1/6 text-lg font-bold text-neon-yellow animate-jello opacity-75 pointer-events-none">SKIBIDI BOPPY</div>
      <div className="absolute bottom-4/5 left-1/8 text-xl font-bold text-neon-purple animate-wobble opacity-65 pointer-events-none">CHAOS</div>

      {/* Additional floating screenshots for extra chaos */}
      <div className="absolute top-24 left-1/4 w-20 h-20 animate-fly-around opacity-40 pointer-events-none">
        <Image
          src="/images/skibidi-collage.jpeg"
          alt="Extra chaos"
          width={80}
          height={80}
          className="rounded-lg border-2 border-neon-green animate-glow"
        />
      </div>
      <div className="absolute bottom-24 right-1/3 w-16 h-16 animate-spin-chaos opacity-50 pointer-events-none">
        <Image
          src="/images/skibidi-collage.jpeg"
          alt="Extra chaos 2"
          width={64}
          height={64}
          className="rounded-lg border-2 border-neon-pink animate-wobble"
        />
      </div>
    </div>
  )
}