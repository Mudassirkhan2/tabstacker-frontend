
"use client"
import React from 'react'
import Image from 'next/image'
import googleImg from '../../public/googleImg.svg'
import { signIn } from 'next-auth/react'
import { useState } from 'react'
import Link from "next/link"
const SignUpBtn = () => {
  const [fullname, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  }

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Prevent the form from submitting (for this example)

    // Now you can access the values of email and password
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Username:', fullname);
    try {
      const response = await fetch('http://localhost:8000/user/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ fullname, email, password }),
      });
    } catch (error) {
      console.error("Error:", error);
    }
  };
  return (
    <div className='flex  flex-col gap-4'>
      <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
        {/* fullname */}
        <label htmlFor="signin-fullname">Username:</label>
        <input type="text" id="signin-fullname" required className='border-gray-300 rounded' placeholder='fullname' value={fullname}
          onChange={handleUsernameChange} />
        {/* email */}
        <label htmlFor="signin-email">Email:</label>
        <input type="email" id="signin-email" required className='border-gray-300 rounded' placeholder='email' value={email}
          onChange={handleEmailChange} />
        {/* password */}
        <label htmlFor="signin-password">Password:</label>
        <input type="password" id="signin-password" required placeholder='password' className='border-gray-300 rounded' value={password}
          onChange={handlePasswordChange} />
        <button type="submit" className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4'>Sign Up</button>
      </form>
      <div className='flex justify-between text-sm whitespace-nowrap sm:text-lg'>
        <p className='mb-6 dark:text-teal-400'>already have account? <Link href="/sign-in" className='ml-1 text-red-600 transition duration-200 ease-in-out hover:text-red-900'>Login</Link> </p>
      </div>

      <div className='flex items-center my-4 before:border-t before:flex-1 before:border-gray-300 after:border-t after:flex-1 after:border-gray-300'>
        <p className='mx-4 font-semibold text-center dark:text-teal-400'>OR</p>
      </div>
      <button
        onClick={() => signIn('google')}
        className='  flex items-center gap-4 shadow-md rounded-lg pl-3'>
        <Image src={googleImg} alt="Google Logo" width={20} height={20} />
        <span className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4'>Sign in with Google</span>
      </button>
    </div>

  )
}

export default SignUpBtn
