"use client";
import React from 'react';
import Navbar from '../components/clients/NavBar'
import SignUpBtn from '@/components/clients/SignUpBtn';
import UserInfo from '../components/clients/Userinfo.jsx'
import { useSession } from "next-auth/react";
import EntryPage from '@/components/clients/EntryPage';
import Features from '@/components/Features';
import HeroSection from '@/components/HeroSection';

export default function Home() {
  const { status, data: session } = useSession();
  return (
    <main className='max-w-7xl mx-auto'>
      <Navbar />
      <HeroSection />
      <UserInfo />
      <Features />
    </main>
  )
}
