"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Moon, Sun, Menu, X } from "lucide-react"
import { useTheme } from "next-themes"
import { useScrollEffect } from "@/hooks/useScrollEffect"
import { PERSONAL_INFO, NAVIGATION_ITEMS } from "@/constants/data"

export function Header() {
  const { theme, setTheme } = useTheme()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const isScrolled = useScrollEffect(50)

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 px-4 lg:px-6 h-16 flex items-center justify-between transition-all duration-300 ${
          isScrolled
            ? "bg-white/10 dark:bg-black/10 backdrop-blur-md border-b border-white/20 dark:border-white/10"
            : "bg-transparent"
        }`}
      >
        {/* Logo */}
        <div className="flex items-center">
          <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            {PERSONAL_INFO.name}
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center justify-center flex-1">
          <div className="flex items-center space-x-8 bg-white/10 dark:bg-black/10 backdrop-blur-md rounded-full px-8 py-3 border border-white/20 dark:border-white/10">
            {NAVIGATION_ITEMS.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>

        {/* Theme Toggle */}
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="ml-auto md:ml-0 bg-white/10 dark:bg-black/10 backdrop-blur-md border border-white/20 dark:border-white/10"
        >
          {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
        </Button>
      </header>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-white/90 dark:bg-black/90 backdrop-blur-md">
          <div className="flex flex-col items-center justify-center h-full space-y-8">
            {NAVIGATION_ITEMS.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-2xl font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      )}
    </>
  )
}
