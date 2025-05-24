"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { useTypingEffect } from "@/hooks/useTypingEffect"
import { PERSONAL_INFO } from "@/constants/data"

export function HeroSection() {
  const [currentRole, setCurrentRole] = useState(0)
  const { displayedText, isTyping } = useTypingEffect(PERSONAL_INFO.tagline, 100)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % PERSONAL_INFO.roles.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative z-10 px-4 lg:px-6 py-12 lg:py-24 mt-16">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col items-center text-center space-y-8">
          {/* Safari Browser Mockup */}
          <div className="w-full max-w-4xl mx-auto">
            <div className="bg-white/20 dark:bg-black/20 backdrop-blur-md rounded-t-xl border border-white/30 dark:border-white/10 p-3">
              <div className="flex items-center space-x-2 mb-3">
                <div className="w-3 h-3 bg-red-500 rounded-full" />
                <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                <div className="w-3 h-3 bg-green-500 rounded-full" />
                <div className="flex-1 bg-white/20 dark:bg-black/20 rounded-md px-3 py-1 mx-4">
                  <span className="text-xs text-gray-600 dark:text-gray-400">https://{PERSONAL_INFO.domain}</span>
                </div>
              </div>

              {/* Status Bar */}
              <div className="flex items-center justify-between mb-3 px-4 py-2 bg-white/10 dark:bg-black/10 rounded-lg">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-xs text-gray-600 dark:text-gray-400">
                    Currently looking for new opportunities
                  </span>
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-500">Available for hire</div>
              </div>

              <div className="bg-white/10 dark:bg-black/10 backdrop-blur-sm rounded-lg p-12 lg:p-20 relative overflow-hidden border border-white/20 dark:border-white/10">
                <div className="relative z-10 text-left">
                  <h1 className="text-3xl lg:text-6xl font-bold mb-4 text-gray-900 dark:text-white">
                    {displayedText}
                    {isTyping && <span className="animate-pulse">|</span>}
                  </h1>
                  <div className="h-8 lg:h-12 flex items-start relative overflow-hidden">
                    <p
                      key={currentRole}
                      className="text-xl lg:text-3xl font-medium text-gray-700 dark:text-gray-300 animate-fade-in-down"
                    >
                      {PERSONAL_INFO.roles[currentRole]}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
            >
              View My Work
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-white/10 dark:bg-black/10 backdrop-blur-md border-white/30 dark:border-white/10 hover:bg-white/20 dark:hover:bg-black/20"
            >
              Get In Touch
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
