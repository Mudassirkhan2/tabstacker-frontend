"use client";
import React from 'react';
import Navbar from '../components/clients/NavBar'
import SignUpBtn from '@/components/clients/SignUpBtn';
import UserInfo from '../components/clients/Userinfo.jsx'
import { useSession } from "next-auth/react";

export default function Home() {
  const { status, data: session } = useSession();
  return (
    <main>
      {/* <Navbar /> */}
      {status === "authenticated" ? <UserInfo /> : <SignUpBtn />}
    </main>
  )
}
