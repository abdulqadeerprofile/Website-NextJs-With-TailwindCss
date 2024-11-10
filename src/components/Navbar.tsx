"use client"
import { useState } from "react"
import Link from "next/link"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed w-full bg-white shadow-lg z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="text-xl font-bold text-gray-800">AutoPartsHub</div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-500 hover:text-gray-600"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex space-x-8">
            <Link href="#home" className="text-gray-600 hover:text-blue-500">
              Home
            </Link>
            <Link href="#about" className="text-gray-600 hover:text-blue-500">
              About
            </Link>
            <Link href="#products" className="text-gray-600 hover:text-blue-500">
              Products
            </Link>
            <Link href="#contact" className="text-gray-600 hover:text-blue-500">
              Contact
            </Link>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link
                href="#home"
                className="block px-3 py-2 text-gray-600 hover:text-blue-500"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                href="#about"
                className="block px-3 py-2 text-gray-600 hover:text-blue-500"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link
                href="#products"
                className="block px-3 py-2 text-gray-600 hover:text-blue-500"
                onClick={() => setIsOpen(false)}
              >
                Products
              </Link>
              <Link
                href="#contact"
                className="block px-3 py-2 text-gray-600 hover:text-blue-500"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}