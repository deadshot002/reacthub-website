import React from 'react'

export default function Nav() {
  return (
    <header className="mt-3 text-gray-600 body-font">
    <div className="flex flex-wrap p-3 flex-col md:flex-row items-center justify-center">
      <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
        <span className="cursor-pointer ml-3 text-xl">Reacthub</span>
      </a>
      <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
        <a className="cursor-pointer mr-5 hover:text-gray-900">Home</a>
        <a className="cursor-pointer mr-5 hover:text-gray-900">about</a>
        <a className="cursor-pointer mr-5 hover:text-gray-900">team</a>
        <a className="cursor-pointer mr-5 hover:text-gray-900">Contact us</a>
      </nav>
      <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base md:mt-0">Button</button>
    </div>
  </header>
  )
}
