import React from 'react'

const Button = ({ name, click }) => {
  return (
    <div className="mt-10 mb-20">
      <button
        className="bg-red-800 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg ease-in duration-300 "
        type="button"
        onClick={click}
      >
        {name}
      </button>
    </div>
  )
}

export default Button
