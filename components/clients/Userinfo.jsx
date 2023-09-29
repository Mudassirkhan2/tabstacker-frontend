
"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import EntryPage from "./EntryPage";
import Link from 'next/link';

export default function UserInfo() {
    const { status, data: session } = useSession();
    const [email, setEmail] = useState(null);
    //previous email
    const [token, setToken] = useState('');
    const [error, setError] = useState(null);
    useEffect(() => {
        if (session?.user?.email) {
            setEmail(session?.user?.email);
            console.log(session?.user?.email)
            if (email) {
                console.log("api start")
                // Define the endpoint URL (replace with your actual server URL)
                const endpoint = `https://tabstacker-backend.onrender.com/user/googletoken/${email}`;
                // Make a GET request to the server
                fetch(endpoint)
                    .then((response) => {
                        console.log("api call")
                        // Make sure the response is valid
                        if (!response.ok) {
                            throw new Error('Network response was not ok');
                        }
                        return response.json();
                    })
                    .then((data) => {
                        // Handle the data from the response
                        console.log(data)
                        setToken(data.token);
                        localStorage.setItem('token', data.token);
                        // reload the page to send the token to the content script
                        // setTimeout(() => {
                        //     // reload the page
                        //     window.location.reload();
                        //     console.log("page reloaded")
                        // }, 2000);
                        setError(null);
                    })
                    .catch((error) => {
                        // Handle errors
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
            <EntryPage />
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

