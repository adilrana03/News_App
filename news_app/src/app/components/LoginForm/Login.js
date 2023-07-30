'use client'
import {
      createUserWithEmailAndPassword,
      signInWithEmailAndPassword,
      getAuth
} from "firebase/auth";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { app } from '../../../../lib/firebase'
import { Router } from 'next/router';
import { TextField } from '@mui/material';



const LoginForm = () => {
      const [data, setData] = useState({});
      let auth = getAuth()

      const handleInput = (e) => {
            let newInput = { [e.target.name]: e.target.value }
            setData({ ...data, ...newInput })

      }
      const handleSubmit = () => {
            signInWithEmailAndPassword(auth, data.email, data.password)
                  .then((res) => {
                        console.log(res.user);
                        alert("sign in Successfull!");
                  }).catch((err) => {
                        alert(err.message)
                  })
      }


      return (
            <div className='block w-[80%]  ml-32 text-3xl text-center'>
                  <div className='block'>
                        <h1 className='mb-3 justify-center '>Sign In</h1>
                        <TextField
                              type="email"
                              variant="outlined"
                              id="email"
                              name="email"
                              label="Email"
                              onChange={(e) => handleInput(e)}
                        />
                        <TextField
                              type="password"
                              variant="outlined"
                              id="password"
                              name="password"
                              label="Password"
                              onChange={(e) => handleInput(e)}
                        />
                        <button type="submit" onClick={handleSubmit} className='bg-green-300 m-2 p-2 text-2xl'>
                              Sign In
                        </button>
                  </div>

            </div>
      );
};

export default LoginForm;