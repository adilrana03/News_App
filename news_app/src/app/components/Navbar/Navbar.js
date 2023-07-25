import React from 'react'

const Navbar = () => {
      return (
            <div className='justify-center  w-[85%] md:ml-[7.5%] sm:ml-[7.5%]'>
                  <ul className='flex bg-blue-400 text-white justify-between p-2 text-xl ' >
                        <div className='ml-4 p-1 '>
                              <h2>News</h2>
                        </div>
                        <div className='justify-end'>
                              <li className='mr-10 p-1 '>
                                    <a className='m-auto p-1' href="/">Home</a>
                                    <a className='m-auto p-1' href="/">About</a>
                                    <a className='m-auto p-1' href="/">Contact</a>
                              </li>
                        </div>
                  </ul>
            </div>
      )
}

export default Navbar