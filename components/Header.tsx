"use client"; 
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { Menu, CalendarFold } from "lucide-react"
import Link from "next/link"
import '@fontsource/poppins/400.css';  
import '@fontsource/poppins/700.css';  

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="  sticky top-0 bg-white  backdrop-blur-md z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold font-family:['poppins'] " >Woinshet Kassa Realty</h1>

        {/* Desktop Navigation Links */}
        <nav className="space-x-6 hidden md:flex">
          <Link href="#about" className="text-gray-600 hover:text-gray-900">About</Link>
          <Link href="#services" className="text-gray-600 hover:text-gray-900">Services</Link>
          <Link href="#portfolio" className="text-gray-600 hover:text-gray-900">Portfolio</Link>
          <Link href="#testimonials" className="text-gray-600 hover:text-gray-900">Testimonials</Link>
          <Link href="#contact" className="text-gray-600 hover:text-gray-900">Contact</Link>
        </nav>

        {/* Mobile Menu Button */}
        <Button variant="ghost" className="md:hidden" onClick={toggleMenu}>
          <Menu className="w-6 h-6 text-gray-900" />
        </Button>
      </div>

      {/* Mobile Navigation Links */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 p-4">
          <nav className="flex flex-col space-y-2">
            <Link href="#about" className="text-gray-600 hover:text-gray-900">About</Link>
            <Link href="#services" className="text-gray-600 hover:text-gray-900">Services</Link>
            <Link href="#portfolio" className="text-gray-600 hover:text-gray-900">Portfolio</Link>
            <Link href="#testimonials" className="text-gray-600 hover:text-gray-900">Testimonials</Link>
            <Link href="#contact" className="text-gray-600 hover:text-gray-900">Contact</Link>
          </nav>
        </div>
      )}
    </header>
  )
}
