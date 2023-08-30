import React from 'react';
import Navbar from '../components/clients/NavBar'
import UserInfo from '../components/clients/Userinfo.jsx'
export default function Home() {
  return (
    <main>
      <Navbar/>
      <div className='min-h-screen flex items-center justify-center'>
      <UserInfo/>
      </div>
    </main>
  )
}
