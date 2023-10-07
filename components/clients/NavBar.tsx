"use client";

import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";
import SideImage from "../../app/assets/SideImage.png"
import logoIcon from "../../app/assets/logoIcon.svg"
import Image from 'next/image'

export default function Navbar() {
  const { status } = useSession();
  const handleSignOut = () => {
    signOut();
    localStorage.removeItem('token');
  };
  return (
    <div className="p-4 flex justify-between items-center ">
      <Link className="font-bold text-lg " href="/">
        {/* <div className='absolute top-4 left-6'> */}
        <span className='flex items-center space-x-2'>  <Image src={logoIcon} alt="Google Logo" width={20} height={20} className='inline-block w-9 h-9' />
          <h1 className='text-2xl md:text-4xl font-bold '>TabStacker</h1></span>
        {/* </div> */}
      </Link>
      {status === "authenticated" ? (
        <button
          onClick={() => handleSignOut()}
          className="bg-slate-900 text-white px-6 py-2 rounded-md"
        >
          Sign Out
        </button>
      ) : (
        <Link href="/sign-up">
          <button className="bg-slate-900 text-white px-6 py-2 rounded-md">
            Sign In
          </button>
        </Link>
      )}
    </div>
  );
}