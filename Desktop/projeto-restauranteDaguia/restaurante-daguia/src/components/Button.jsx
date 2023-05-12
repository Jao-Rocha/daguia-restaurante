import React from 'react'

const Button = ({ name, click }) => {
  return (
    <div className="mt-10 mb-20">
      <button
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out "
        type="button"
        onClick={click}
      >
        {name}
      </button>
    </div>
  )
}

export default Button
