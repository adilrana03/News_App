'use client'
import { getAuth, signOut } from "firebase/auth";
import React from 'react'
import { useRouter } from "next/navigation";
import { Button } from '@mui/material';

const Navbar = () => {
      const data = JSON.parse(localStorage.getItem('data')) || "";
      const auth = getAuth();
      const router = useRouter();


      const handleLogOut = () => {
            signOut(auth).then(() => {
                  console.log("Sign-out successful.")
                  localStorage.removeItem("data");
                  router.push('/LoginForm')
            }).catch((error) => {
                  console.log(error.message)
                  alert("error")
            });
      }

      return (
            <div className='justify-center '>
                  <ul className='flex bg-blue-400 text-white justify-between p-2 text-xl ' >
                        <div className='ml-4 p-3 '>
                              <h2>News</h2>
                        </div>
                        <div className=''>
                              <li className='mr-10 p-3 '>
                                    <a className='m-4 p-1' href="/">About</a>
                                    <a className='m-4 p-1' href="/">Contact</a>
                                    <a className='m-4 p-1' href="/SignUp" >
                                          {
                                                data ? data.displayName : "SignUp"
                                          }
                                    </a>
                                    {
                                          data ? <Button variant='contained' color='secondary' onClick={handleLogOut}>Log Out</Button> : ""
                                    }

                              </li>
                        </div>
                  </ul>
            </div>
      )
}

export default Navbar