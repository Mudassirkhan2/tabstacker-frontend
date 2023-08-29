import Navbar from '@/components/clients/NavBar'
import SigninBtn from '@/components/clients/SigninBtn'
import UserInfo from '@/components/clients/UserInfo'
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
