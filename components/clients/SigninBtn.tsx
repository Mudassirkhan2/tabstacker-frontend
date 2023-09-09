
"use client"
import React from 'react'
import Image from 'next/image'
import googleImg from '../../public/googleImg.svg'
import { signIn } from 'next-auth/react'
import { useState } from 'react'
import Link from "next/link"
const SignInBtn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
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
                const data = await response.json();

                // Extract the token from the response
                const token = data.token;

                // Store the token in localStorage
                localStorage.setItem('token', token);

                console.log("Token saved in localStorage:", token);
                // open new tab
                window.open("https://www.google.com", "_blank");
                // You can now use the token for authentication or other purposes
            } else {
                console.error("Signin failed:", response.statusText);
            }

        } catch (error) {
            console.error("Error:", error);
        }
    };
    return (
        <div className='flex  flex-col gap-4'>
            <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
                {/* email */}
                <label htmlFor="signin-email">Email:</label>
                <input type="email" id="signin-email" required className='border-gray-500' placeholder='email' value={email}
                    onChange={handleEmailChange} />
                {/* password */}
                <label htmlFor="signin-password">Password:</label>
                <input type="password" id="signin-password" required placeholder='password' value={password}
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
                onClick={() => signIn('google')}
                className='  flex items-center gap-4 shadow-md rounded-lg pl-3'>
                <Image src={googleImg} alt="Google Logo" width={20} height={20} />
                <span className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4'>Sign in with Google</span>
            </button>
        </div>

    )
}

export default SignInBtn
