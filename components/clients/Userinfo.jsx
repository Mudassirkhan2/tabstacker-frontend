import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import EntryPage from "./EntryPage";
import Link from 'next/link';
import Cookies from 'js-cookie';

export default function UserInfo() {
    const { status, data: session } = useSession();
    const [email, setEmail] = useState(null);
    const [token, setToken] = useState('');
    const [error, setError] = useState(null);

    useEffect(() => {
        if (session?.user?.email) {
            setEmail(session?.user?.email);
            console.log(session?.user?.email)
            if (email) {
                console.log("api start")
                const endpoint = `https://tabstacker-backend.onrender.com/user/googletoken/${email}`;
                fetch(endpoint)
                    .then((response) => {
                        console.log("api call")
                        if (!response.ok) {
                            throw new Error('Network response was not ok');
                        }
                        return response.json();
                    })
                    .then((data) => {
                        console.log(data)
                        setToken(data.token);
                        if (!localStorage.getItem('token')) { // check if token has already been set
                            localStorage.setItem('token', data.token);
                            // reload the page after setting the token
                            window.location.reload();
                        }
                        setError(null);
                    })
                    .catch((error) => {
                        setError(error.message);
                        setToken('');
                    });
            }
        }
        else {
            console.log("no email")
        }
    }, [email, session?.user?.email, setEmail]);

    if (status === "authenticated") {
        return (
            <EntryPage session={session} />
        );
    } else {
        return (
            <div className='flex items-center justify-center'>
                <Link href="/sign-in">
                    <button className="bg-lime-700 text-orange-300 text-3xl px-6 py-2 rounded-md text-center">
                        Get Started
                    </button>
                </Link>
            </div>
        )
    }
}