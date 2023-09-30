
"use client"
import React from 'react'
import Image from 'next/image'
import googleImg from '@/public/googleImg.svg'
import { signIn } from 'next-auth/react'
import { useState } from 'react'
import Link from "next/link"
import SideImage from "../../app/assets/SideImage.png"
import logoIcon from "../../app/assets/logoIcon.svg"
import { useRouter } from 'next/navigation'

const SignUpBtn = () => {
  const [fullname, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();
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
    e.preventDefault(); // Prevent the form from submitting 
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Username:', fullname);
    try {
      const response = await fetch('https://tabstacker-backend.onrender.com/user/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ fullname, email, password }),
      });
    } catch (error) {
      console.error("Error:", error);
    }
    router.push('/sign-in')

  };
  return (
    <main className='flex'>
      <div className='flex  flex-col gap-4 w-3/5 items-center justify-center relative'>
        <div className='absolute top-4 left-6'>
          <span className='flex items-center space-x-2'>  <Image src={logoIcon} alt="Google Logo" width={20} height={20} className='inline-block w-9 h-9' />
            <h1 className='text-4xl font-bold '>TabStacker</h1></span>
        </div>
        <h1 className='lg:text-4xl md:text-3xl font-bold mb-4 font-mono'>Create Account</h1>
        <form className='flex flex-col gap-3' onSubmit={handleSubmit}>
          {/* fullname */}
          <label htmlFor="signin-fullname">Username:</label>
          <input type="text" id="signin-fullname" required className='border border-gray-500 text-black rounded-r-md p-1' placeholder='fullname' value={fullname}
            onChange={handleUsernameChange} />
          {/* email */}
          <label htmlFor="signin-email">Email:</label>
          <input type="email" id="signin-email" required className='border border-gray-500  text-black  rounded-r-md p-1' placeholder='Email' value={email}
            onChange={handleEmailChange} />
          {/* password */}
          <label htmlFor="signin-password">Password:</label>
          <input type="password" id="signin-password" required placeholder='password' className='border text-black  border-gray-500 rounded-r-md p-1' value={password}
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
          onClick={() => signIn('google', { callbackUrl: 'https://tabstacker.vercel.app/' })}
          className='  flex items-center gap-4 shadow-md rounded-lg pl-3'>
          <Image src={googleImg} alt="Google Logo" width={20} height={20} />
          <span className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4'>Sign in with Google</span>
        </button>
      </div>
      <Image src={SideImage} alt='SideImage' className='h-screen w-2/5' />
    </main>

  )
}

export default SignUpBtn
