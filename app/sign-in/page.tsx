
import Navbar from '@/components/clients/NavBar';
import SigninBtn from '@/components/clients/SignInBtn';
const page = () => {
    return (
        <div>
            <Navbar />
            <div className='min-h-screen flex items-center justify-center'>
                <SigninBtn />
            </div>
        </div>
    )
}

export default page
