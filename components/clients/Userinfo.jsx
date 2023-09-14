
"use client";
import Image from "next/image";
import { signIn, signOut, useSession } from "next-auth/react";
import { useEffect, useState } from "react";
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
            <div className="shadow-xl p-8 rounded-md flex flex-col gap-3 bg-yellow-200 justify-center items-center min-h-screen">
                <Image
                    className="rounded-full"
                    src={session?.user?.image}
                    width={60}
                    height={60}
                    alt="user image"
                />
                <div>
                    Name: <span className="font-bold">{session?.user?.name}</span>
                </div>
                <div>
                    Email: <span className="font-bold">{session?.user?.email}</span>
                </div>
                <button
                    onClick={() => signOut()}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                    SignOut
                </button>
            </div>
        );
    }
}

