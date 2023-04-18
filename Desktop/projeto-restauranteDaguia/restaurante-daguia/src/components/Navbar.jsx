import Link from 'next/link'
import React from 'react'

//<Link href="../pages/index.jsx">
const Navbar = () => {
  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <a className="text-white">Logo</a>
          </div>
          <div className="flex">
            <Link
              href="/home"
              className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              Inicio
            </Link>

            <Link
              href="/contact"
              className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              Contato
            </Link>

            <Link
              href="/job"
              className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              Trabalhe Conosco
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
