'use client'

import { useState, useEffect } from 'react'
import { Menu, X, Download } from "lucide-react"
import { navLinks } from "@/data/navigation"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-md' 
          : 'bg-white/80 backdrop-blur-sm'
      } border-b border-gray-100`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2">
            <img 
              src="/favicon.png" 
              alt="IA Logo" 
              className="w-10 h-10 rounded-full"
            />
            <span className="text-xl sm:text-2xl font-bold text-gray-900">
              Isaac<span className="text-green-600">.</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative text-gray-700 hover:text-green-600 font-medium text-sm lg:text-base transition-colors group"
              >
                {link.label}
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-green-600 transition-all group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Contact Button - Desktop */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://docs.google.com/document/d/1cHIFQGB0YQhFf5z7uKipJ1Gtrwupq7m_/edit?usp=drive_link&ouid=108681032864394007732&rtpof=true&sd=true"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 border-2 border-gray-300 text-gray-700 px-4 py-2 rounded-full font-medium hover:bg-gray-50 hover:border-gray-400 transition-all duration-300"
            >
              <Download className="w-4 h-4" />
              CV
            </a>
            <a
              href="#contact"
              className="bg-green-600 text-white px-5 py-2.5 rounded-full font-medium hover:bg-green-700 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Contact Me
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-800 p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
          <nav className="flex flex-col py-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-6 py-3 text-gray-700 hover:text-green-600 hover:bg-green-50 font-medium transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="px-6 py-3">
              <a
                href="https://docs.google.com/document/d/1FQSKZm-kxtpgAQPQ-foTrxcehKTZWG51/edit?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 w-full border-2 border-gray-300 text-gray-700 text-center px-5 py-2.5 rounded-full font-medium hover:bg-gray-50 transition-all mb-3"
              >
                <Download className="w-4 h-4" />
                Download CV
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="block w-full bg-green-600 text-white text-center px-5 py-2.5 rounded-full font-medium hover:bg-green-700 transition-all"
              >
                Contact Me
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
