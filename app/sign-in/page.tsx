
import Navbar from '@/components/clients/NavBar';
import SignInBtn from "../SignInBtn";
const page = () => {
    return (
        <div>
            <Navbar />
            <div className='min-h-screen flex items-center justify-center'>
                <SignInBtn />
            </div>
        </div>
    )
}

export default page
