import React from 'react';
import Navbar from '../components/clients/NavBar'
import SignUpBtn from '@/components/clients/SignUpBtn';
import UserInfo from '../components/clients/Userinfo.jsx'
export default function Home() {
  return (
    <main>
      {/* <Navbar /> */}
      <SignUpBtn />
      <UserInfo />
    </main>
  )
}
