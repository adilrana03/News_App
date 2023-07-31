'use client'
import {
      createUserWithEmailAndPassword,
      signInWithEmailAndPassword,
      getAuth, GoogleAuthProvider, signInWithPopup
} from "firebase/auth";
import { useRouter } from 'next/navigation'
import React, { useState } from "react";
import { app } from '../../../lib/firebase'
import { Button, TextField } from '@mui/material';

const SignUpForm = () => {
      const [data, setData] = useState({});
      let auth = getAuth()
      const router = useRouter()

      let googleProvider = new GoogleAuthProvider();

      const handleInput = (e) => {
            let newInput = { [e.target.name]: e.target.value }
            setData({ ...data, ...newInput })

      }
      const handleSubmit = () => {
            createUserWithEmailAndPassword(auth, data.email, data.password)
                  .then((res) => {
                        console.log(res.user);
                        localStorage.setItem("data", res.user)
                        router.push('/LoginForm')
                  }).catch((err) => {
                        alert(err.message)
                  })

      }
      const handleGoogle = () => {
            signInWithPopup(auth, googleProvider)
                  .then((res) => {
                        console.log(res.user);
                        localStorage.setItem("data", JSON.stringify(res.user))
                        router.push('/')
                  }).catch((err) => {
                        alert(err.message)
                  })
      }


      return (
            <div className='block w-[80%]  ml-32 text-3xl text-center'>
                  <div className='w-[40%] m-auto'>
                        <h1 className='mb-3 justify-center '>Sign Up</h1>
                        <div className='grid grid-cols-1 text-center mb-4'>
                              <TextField
                                    type="email"
                                    variant="outlined"
                                    id="email"
                                    name="email"
                                    label="Email"
                                    onChange={(e) => handleInput(e)}
                                    className='mb-5'
                              />
                              <TextField
                                    type="password"
                                    variant="outlined"
                                    id="password"
                                    name="password"
                                    label="Password"
                                    onChange={(e) => handleInput(e)}
                              />
                        </div>
                        <button type="submit" onClick={handleSubmit} className='bg-green-300 m-2 p-2 text-2xl rounded-lg '>
                              Sign Up
                        </button>

                        <h1> OR</h1>

                        <Button className="bg-blue-400 mt-5" variant='contained' onClick={handleGoogle}>
                              Google
                        </Button>
                  </div>

            </div>
      );
};

export default SignUpForm;