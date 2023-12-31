
"use client"
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import googleImg from '@/public/googleImg.svg'
import SideImage from "../app/assets/SideImage.png"
import logoIcon from "../app/assets/logoIcon.svg"
import { signIn } from 'next-auth/react'
import Link from "next/link"
import { useRouter } from 'next/navigation'
import Cookies from 'js-cookie';
const SignInBtn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // const [session, loading] = signIn('google', { callbackUrl: 'http://localhost:3000/' })

    const router = useRouter();
    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };
    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };
    const handleSignIn = async () => {
        signIn('google', { callbackUrl: 'http://localhost:3000/' })
    };
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault(); // Prevent the form from submitting 
        // Now you can access the values of email and password
        console.log('Email:', email);
        console.log('Password:', password);
        try {
            const response = await fetch('https://tabstacker-backend.onrender.com/user/signin', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });
            if (response.ok) {
                console.log(response)
                const data = await response.json();
                // Extract the token from the response
                const token = data.token;
                // Store the token in localStorage
                localStorage.setItem('token', token);
                Cookies.set('token', token);
                console.log("Token saved in localStorage:", token);
                // reload the page to send the token to the content script

                setTimeout(() => {
                    // reload the page
                    window.location.reload();
                }, 2000);
                router.push('/')
            } else {
                console.error("Signin failed:", response.statusText);
            }

        } catch (error) {
            console.error("Error:", error);
        }
    };
    return (
        <main className='flex'>
            <div className='flex  flex-col gap-4 w-3/5 items-center justify-center relative'>
                <div className='absolute top-4 left-16 lg:left-24'>
                    <span className='flex items-center space-x-2'>  <Image src={logoIcon} alt="Google Logo" width={20} height={20} className='inline-block w-9 h-9' />
                        <h1 className='text-4xl font-bold '>TabStacker</h1></span>
                </div>
                <h1 className='text-4xl font-bold mb-4 font-mono text-center'>Sign In</h1>
                <form className='flex flex-col gap-3' onSubmit={handleSubmit}>
                    {/* email */}
                    <label htmlFor="signin-email">Email:</label>
                    <input type="email" id="signin-email" required className='border text-black  border-gray-500 rounded-r-md p-1' placeholder='Email' value={email}
                        onChange={handleEmailChange} />
                    {/* password */}
                    <label htmlFor="signin-password">Password:</label>
                    <input type="password" id="signin-password" className='border text-black  border-gray-500 rounded-r-md p-1' required placeholder='password' value={password}
                        onChange={handlePasswordChange} />
                    <button type="submit" className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4'>Sign In</button>
                </form>
                <div className='flex justify-between text-sm whitespace-nowrap sm:text-lg'>
                    <p className='mb-6 dark:text-teal-400'> dont have account? <Link href="/" className='ml-1 text-red-600 transition duration-200 ease-in-out hover:text-red-900'>Register</Link> </p>
                </div>

                <div className='flex items-center my-4 before:border-t before:flex-1 before:border-gray-300 after:border-t after:flex-1 after:border-gray-300'>
                    <p className='mx-4 font-semibold text-center dark:text-teal-400'>OR</p>
                </div>
                <button
                    onClick={handleSignIn}
                    className='  flex items-center gap-4 shadow-md rounded-lg pl-3'>
                    <Image src={googleImg} alt="Google Logo" width={20} height={20} />
                    <span className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4'>Sign in with Google</span>
                </button>
            </div>
            <Image src={SideImage} alt='SideImage' className='h-screen w-2/5 bg-cover' />
        </main>

    )
}

export default SignInBtn
