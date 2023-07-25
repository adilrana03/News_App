import Image from 'next/image';
// import React, { useState } from 'react'
import getNews from '../api';
import Link from 'next/link';


const Main = async () => {
      let news = await getNews();
      console.log(news);

      // const handleClick = () => {
      //       setState("grid grid-cols-2");
      // }
      return (
            <div className='w-[90%] m-auto bg-gray-100 p-6 shadow-2xl rounded-md'>
                  <div className='shadow-2xl m-2 p-2 mt-16 space-x-5'>
                        <h1 className='text-2xl font-bold text-center text-sky-500 p-2' >[ <span className='text-black'>Latest News</span> ]</h1>
                        <button className='bg-slate-400 m-2 p-2 cursor-pointer'> GRID </button>
                  </div>
                  <ul className=''>
                        {
                              news.map((e, i) => {
                                    return (
                                          <Link href={`/Main/${e.author}`} className='flex m-4 justify-center bg-white hover:shadow-2xl p-2 rounded-md w-[90%] h-auto cursor-pointer'>
                                                <li className='m-1 p-2 text-xl'>{e.title}</li>
                                                <img className='h-[100px] w-[200px] rounded-md' src={e.urlToImage}
                                                />
                                          </Link>
                                    )
                              })
                        }
                  </ul>
            </div>
      )
}

export default Main;