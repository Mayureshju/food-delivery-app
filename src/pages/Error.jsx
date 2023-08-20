import React from 'react'
import { Link } from 'react-router-dom'


const Error = () => {
  
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
    <div className="bg-white p-8 rounded-md shadow-md text-center">
      <h1 className="text-4xl font-semibold mb-4">404</h1>
      <p className="text-gray-600 mb-4">Page not found</p>
      <Link to="/">
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
        Go to Home
      </button>
      </Link>
     
    </div>
  </div>
  )
}

export default Error