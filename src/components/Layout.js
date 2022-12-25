import React from 'react';


const Layout = ({ children }) => {

  return (
    <div
      className="bg-white shadow-lg h-60 text-center flex justify-center items-center m-10 rounded-lg w-96 cursor-pointer hover:bg-gray-100"
    >
      {children}
    </div>
  )
}

export default Layout