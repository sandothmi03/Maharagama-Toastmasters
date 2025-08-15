"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { usePathname } from "next/navigation"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    if (pathname !== "/") {
      window.location.href = `/#${sectionId}`
      return
    }

    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsOpen(false)
  }

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About Us", href: "#about" },
    { name: "Contact Us", href: "#contact" },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#0B1220]/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-[#772432] rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">TM</span>
            </div>
            <span className="text-white font-semibold text-lg hidden sm:block">Maharagama Toastmasters</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href.substring(1))}
                className="text-gray-300 hover:text-[#B7A57A] transition-colors duration-300 font-medium"
              >
                {link.name}
              </button>
            ))}
            <Link
              href="/memories"
              className="text-gray-300 hover:text-[#B7A57A] transition-colors duration-300 font-medium"
            >
              Memories
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-white hover:bg-[#772432]/20"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-[#0E1217] border-t border-gray-700">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href.substring(1))}
                  className="block w-full text-left px-3 py-2 text-gray-300 hover:text-[#B7A57A] hover:bg-[#772432]/20 rounded-md transition-colors duration-300"
                >
                  {link.name}
                </button>
              ))}
              <Link
                href="/memories"
                className="block px-3 py-2 text-gray-300 hover:text-[#B7A57A] hover:bg-[#772432]/20 rounded-md transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                Memories
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
