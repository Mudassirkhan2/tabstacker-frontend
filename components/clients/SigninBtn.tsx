
"use client"
import React from 'react'
import Image from 'next/image'
import googleImg from '../../public/googleImg.svg'
import {signIn} from 'next-auth/react'
const SigninBtn = () => {
  return (
        <button
            onClick={() => signIn('google')}
          className='  flex items-center gap-4 shadow-md rounded-lg pl-3'>
            <Image src={googleImg} alt="Google Logo" width={20} height={20}   />
            <span className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4'>Sign in with Google</span>
        </button>
  )
}

export default SigninBtn
