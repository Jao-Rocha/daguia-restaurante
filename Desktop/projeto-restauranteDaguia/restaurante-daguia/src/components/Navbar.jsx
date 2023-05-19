import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav className="bg-red-900 font-serif">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <a className="text-white text-2xl"> Daguia</a>
          </div>
          <div className="flex">
            <Link
              href="/"
              className="text-white hover:bg-red-800 hover:text-white  px-3 py-2 rounded-md text-lg font-medium ease-in duration-300"
            >
              Inicio
            </Link>

            <Link
              href="/job"
              className="text-white hover:bg-red-800 hover:text-white px-3 py-2 rounded-md text-lg font-medium ease-in duration-300"
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
