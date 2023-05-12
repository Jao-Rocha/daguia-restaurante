import React from 'react'
import Image from 'next/image'

const Card = ({ image, title, description }) => {
  return (
    <div className="mt-5  max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
      <div className="md:flex">
        <div className="md:flex-shrink-0">
          <Image
            className="h-48 w-full object-cover md:w-48"
            src={image}
            alt={title}
            width={300}
            height={300}
          />
        </div>
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-red-500 font-bold">
            {title}
          </div>
          <p className="mt-2 text-gray-500">{description}</p>
        </div>
      </div>
      <style jsx>{`
        .rounded-xl:hover {
          transform: translateY(-4px);
          box-shadow: 0 4px 25px rgba(0, 0, 0, 0.2);
        }
      `}</style>
    </div>
  )
}

export default Card
