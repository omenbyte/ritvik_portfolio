"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Moon, Sun, Menu, X } from "lucide-react"
import { useTheme } from "next-themes"
import { useScrollEffect } from "@/hooks/useScrollEffect"
import { PERSONAL_INFO, NAVIGATION_ITEMS } from "@/constants/data"
import Link from 'next/link'

export function Header() {
  const { theme, setTheme } = useTheme()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const isScrolled = useScrollEffect(50)
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 px-4 lg:px-6 h-16 flex items-center justify-between transition-all duration-300 ${
          isScrolled
            ? "bg-white/20 dark:bg-black/40 backdrop-blur-md"
            : "bg-transparent"
        }`}
      >
        {/* Logo */}
        <Link href="#">
          <div className="flex items-center">
            <span className="text-purple-600/100 text-xl font-bold bg-clip-text dark:text-purple-600/100">
              {PERSONAL_INFO.name}
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center justify-center flex-1">
          <div className="flex items-center space-x-8 bg-black/5 dark:bg-black/10 backdrop-blur-md rounded-full px-8 py-3 ">
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
          className="ml-auto md:ml-0 bg-white/10 dark:bg-black/10 backdrop-blur-md rounded-full border-2 border-blue-800/50 dark:border-purple-800/50 dark:border-2"
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
